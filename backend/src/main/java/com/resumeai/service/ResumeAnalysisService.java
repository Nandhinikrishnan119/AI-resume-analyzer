package com.resumeai.service;

import com.resumeai.entity.ResumeAnalysis;
import com.resumeai.entity.User;
import com.resumeai.repository.UserRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.regex.Pattern;
import org.springframework.stereotype.Service;

@Service
public class ResumeAnalysisService {

    public ResumeAnalysisService() {
    }

    public ResumeAnalysis analyzeResume(User user, String fileName, String extractedText) {
        String cleaned = extractedText == null ? "" : extractedText;
        int score = calculateScore(cleaned);

        List<String> strengths = new ArrayList<>();
        if (containsSection(cleaned, "experience") || containsSection(cleaned, "work")) strengths.add("Strong work experience section");
        if (containsSection(cleaned, "skills")) strengths.add("Skills section is clearly defined");
        if (countMatches(cleaned, "[A-Z][a-z]+") > 80) strengths.add("Good professional detail density");

        List<String> weaknesses = new ArrayList<>();
        if (!containsSection(cleaned, "summary") && !containsSection(cleaned, "profile")) weaknesses.add("Add a clear professional summary");
        if (!containsSection(cleaned, "skills")) weaknesses.add("Include a dedicated skills section");
        if (countMatches(cleaned, "\b(implemented|developed|led|created|improved|optimized|managed)\b", true) < 4) weaknesses.add("Use more action verbs to strengthen impact");

        List<String> suggestions = new ArrayList<>();
        suggestions.add("Highlight measurable outcomes with numbers and impact");
        suggestions.add("Tailor skills to the target role and keywords");
        suggestions.add("Keep formatting consistent and easy for ATS to parse");

        return new ResumeAnalysis(
            user,
            fileName,
            score,
            String.join("; ", strengths),
            String.join("; ", weaknesses),
            String.join("; ", suggestions),
            cleaned.length() > 200 ? cleaned.substring(0, 200) + "..." : cleaned
        );
    }

    private int calculateScore(String text) {
        if (text == null || text.isBlank()) return 0;

        int score = 40;
        if (containsSection(text, "experience") || containsSection(text, "work")) score += 15;
        if (containsSection(text, "skills")) score += 15;
        if (containsSection(text, "education")) score += 10;
        if (countMatches(text, "\b(implemented|developed|led|created|improved|optimized|managed)\b", true) >= 4) score += 15;
        if (text.length() > 250) score += 10;

        return Math.min(100, score);
    }

    private boolean containsSection(String text, String section) {
        return text.toLowerCase(Locale.ROOT).contains(section.toLowerCase(Locale.ROOT));
    }

    private int countMatches(String text, String regex, boolean caseSensitive) {
        if (text == null || text.isBlank()) return 0;
        String candidate = caseSensitive ? text : text.toLowerCase(Locale.ROOT);
        String pattern = caseSensitive ? regex : regex.toLowerCase(Locale.ROOT);
        return (int) Pattern.compile(pattern).matcher(candidate).results().count();
    }

    private int countMatches(String text, String regex) {
        return countMatches(text, regex, false);
    }
}
