package com.samgtu.es.dto.question;

import java.util.Map;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AnswersDto {
    private String text;
    private Map<Long, Integer> scores; 
}
