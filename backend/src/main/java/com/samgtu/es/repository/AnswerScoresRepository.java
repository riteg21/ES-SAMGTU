package com.samgtu.es.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.samgtu.es.entity.AnswerScores;

public interface AnswerScoresRepository extends JpaRepository<AnswerScores, Long> {
    List<AnswerScores> findByAnswerId(Long answerId);
}
