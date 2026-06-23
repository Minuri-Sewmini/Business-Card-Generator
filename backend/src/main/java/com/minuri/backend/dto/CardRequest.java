package com.minuri.backend.dto;

import java.util.List;

public class CardRequest {
    private String userId;
    private String name;
    private String title;
    private String phone;
    private String email;
    private String linkedin;
    private String github;
    private String portfolio;
    private List<String> skills;

    // 💡 1. Default (No-Args) Constructor
    public CardRequest() {
    }

    // 💡 2. All-Args Constructor
    public CardRequest(String userId, String name, String title, String phone, String email, 
                       String linkedin, String github, String portfolio, List<String> skills) {
        this.userId = userId;
        this.name = name;
        this.title = title;
        this.phone = phone;
        this.email = email;
        this.linkedin = linkedin;
        this.github = github;
        this.portfolio = portfolio;
        this.skills = skills;
    }

    // 💡 3. Getters and Setters
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getPortfolio() {
        return portfolio;
    }

    public void setPortfolio(String portfolio) {
        this.portfolio = portfolio;
    }

    public List<String> getSkills() {
        return skills;
    }

    public void setSkills(List<String> skills) {
        this.skills = skills;
    }
}