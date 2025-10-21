package com.samgtu.es.exception;

public class NotFoundException extends RuntimeException 
{
    public NotFoundException(String typeObject) 
    {
        super(typeObject + " not found.");
    }
}