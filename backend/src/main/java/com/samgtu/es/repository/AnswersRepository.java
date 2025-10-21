package com.samgtu.es.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.samgtu.es.entity.Answers;

public interface AnswersRepository extends JpaRepository<Answers, Long> {
    List<Answers> findByQuestionId(Long questionId);
}
