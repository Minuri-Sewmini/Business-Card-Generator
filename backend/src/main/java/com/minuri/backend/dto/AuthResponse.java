package com.minuri.backend.dto;

public class AuthResponse {
    private String message;
    private boolean success;
    private String userName;
    private String role;

    // 💡 1. Default (No-Args) Constructor
    public AuthResponse() {
    }

    // 💡 2. All-Args Constructor
    public AuthResponse(String message, boolean success, String userName, String role) {
        this.message = message;
        this.success = success;
        this.userName = userName;
        this.role = role;
    }

    // 💡 3. Getters and Setters
    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}