package com.samgtu.es.dto.question;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class QuestionDto {
    private Long id;
    private String question;
    private List<AnswersDto> answers;
}
