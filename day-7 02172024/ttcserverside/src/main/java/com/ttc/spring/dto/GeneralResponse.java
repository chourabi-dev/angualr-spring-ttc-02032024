package com.ttc.spring.dto;

public class GeneralResponse {
	private boolean success;
	private String message;
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public GeneralResponse(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}
	
	
}
