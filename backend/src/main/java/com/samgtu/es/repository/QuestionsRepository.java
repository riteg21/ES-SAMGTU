package com.samgtu.es.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.samgtu.es.entity.Questions;

public interface QuestionsRepository extends JpaRepository<Questions, Long> {

}
