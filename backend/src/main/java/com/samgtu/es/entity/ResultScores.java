package com.samgtu.es.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Builder;
import lombok.Data;

@Data
@Entity
@Builder
public class ResultScores {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer score;

    @ManyToOne
    @JoinColumn(name = "direction_id", nullable = false)
    private Directions direction;

    @ManyToOne
    @JoinColumn(name = "result_id", nullable = false)
    private Result result;
}
