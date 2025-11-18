package com.samgtu.es.googlesheets;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
public class TableSheetsConfig {
    
    @Bean
    public TableSheets tableSheets(
        @Value("${com.samgtu.spreadsheetId}") String spreadsheetId,
        @Value("${com.samgtu.serviceAccountKeyPath}") String serviceAccountKeyPath
    ) throws Exception {
        log.info("{} {}", spreadsheetId, serviceAccountKeyPath);
        if(
            (spreadsheetId == null || spreadsheetId.trim().isEmpty()) 
            && serviceAccountKeyPath == null || serviceAccountKeyPath.trim().isEmpty()
        ) {
            throw new IllegalStateException("tableSheet properties is missing");
        }
        return new GoogleTableSheetsImpl(spreadsheetId, serviceAccountKeyPath);
    }
}
