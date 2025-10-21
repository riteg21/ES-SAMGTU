package com.samgtu.es.dto.result;

import java.util.List;

import com.samgtu.es.dto.question.DirectionsScores;

import lombok.Data;

@Data
public class AllDirectionsScores {
    private List<DirectionsScores> answers;
}
