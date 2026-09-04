package com.resumeai.repository;

import com.resumeai.entity.ResumeAnalysis;
import com.resumeai.entity.User;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResumeAnalysisRepository extends JpaRepository<ResumeAnalysis, Long> {
    List<ResumeAnalysis> findByUserOrderByAnalyzedAtDesc(User user);
}
