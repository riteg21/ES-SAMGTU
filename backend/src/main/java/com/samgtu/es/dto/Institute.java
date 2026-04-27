package com.samgtu.es.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Institute {
    private String groupQuestions;
    private String name;
    private String description;
}
