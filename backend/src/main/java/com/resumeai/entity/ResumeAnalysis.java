package com.resumeai.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "resume_analyses")
public class ResumeAnalysis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String fileName;

    @Column(nullable = false)
    private Integer score;

    @Column(length = 1000)
    private String strengths;

    @Column(length = 1000)
    private String weaknesses;

    @Column(length = 1000)
    private String suggestions;

    @Column(length = 2000)
    private String extractedTextPreview;

    @Column(nullable = false)
    private LocalDateTime analyzedAt;

    @PrePersist
    protected void onCreate() {
        analyzedAt = LocalDateTime.now();
    }

    public ResumeAnalysis() {}

    public ResumeAnalysis(User user, String fileName, Integer score, String strengths, String weaknesses, String suggestions, String extractedTextPreview) {
        this.user = user;
        this.fileName = fileName;
        this.score = score;
        this.strengths = strengths;
        this.weaknesses = weaknesses;
        this.suggestions = suggestions;
        this.extractedTextPreview = extractedTextPreview;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public String getFileName() { return fileName; }
    public void setFileName(String fileName) { this.fileName = fileName; }
    public Integer getScore() { return score; }
    public void setScore(Integer score) { this.score = score; }
    public String getStrengths() { return strengths; }
    public void setStrengths(String strengths) { this.strengths = strengths; }
    public String getWeaknesses() { return weaknesses; }
    public void setWeaknesses(String weaknesses) { this.weaknesses = weaknesses; }
    public String getSuggestions() { return suggestions; }
    public void setSuggestions(String suggestions) { this.suggestions = suggestions; }
    public String getExtractedTextPreview() { return extractedTextPreview; }
    public void setExtractedTextPreview(String extractedTextPreview) { this.extractedTextPreview = extractedTextPreview; }
    public LocalDateTime getAnalyzedAt() { return analyzedAt; }
    public void setAnalyzedAt(LocalDateTime analyzedAt) { this.analyzedAt = analyzedAt; }
}
