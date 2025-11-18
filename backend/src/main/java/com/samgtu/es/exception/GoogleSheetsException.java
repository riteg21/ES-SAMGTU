package com.samgtu.es.exception;

public class GoogleSheetsException extends RuntimeException {
    
    public GoogleSheetsException(String errorMessage) {
        super(errorMessage);
    }
}
