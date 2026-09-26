package com.library.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
	@ExceptionHandler(Exception.class)
	public ResponseEntity<String>handleOtherException(Exception ex) {
		// TODO Auto-generated constructor stub
		return ResponseEntity.status(500).body(ex.getMessage());
		
	}
	@ExceptionHandler(BookNotFoundException.class)
	public ResponseEntity<String>handleBookNotFoundException(BookNotFoundException ex){
		return ResponseEntity.status(404).body(ex.getMessage());
	}
	

}
