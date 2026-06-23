package com.minuri.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.HashMap;
import java.util.Map;

// 💡 [VERY IMPORTANT] සර්වර් එකට බලෙන්ම 'com.minuri.backend' ඇතුළේ තියෙන සේරම කියවන්න කියනවා
@SpringBootApplication(scanBasePackages = "com.minuri.backend")
public class BackendApplication {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(BackendApplication.class);
        
        Map<String, Object> properties = new HashMap<>();
        
        
        // 💡 අපි ආපහු 8082 පෝට් එකටම යනවා, හැබැයි map එකක් හරහා
        properties.put("server.port", "8082");
        
        app.setDefaultProperties(properties);
        app.run(args);
    }
}