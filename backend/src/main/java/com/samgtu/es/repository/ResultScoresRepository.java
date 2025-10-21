package com.samgtu.es.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.samgtu.es.entity.ResultScores;

public interface ResultScoresRepository extends JpaRepository<ResultScores, Long> {
    List<ResultScores> findByResultIdOrderByScoreDesc(Long resultId);
}
