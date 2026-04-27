package com.samgtu.es.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class Direction {
    private Long id;
    private String name;
    private String number;
    private String url;
    private String imageURL;
}
