package com.squad6.projectcrud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ProjectcrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(ProjectcrudApplication.class, args);
	}

}
