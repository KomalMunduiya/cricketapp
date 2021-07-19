package com.project.Cplayer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import com.project.Cplayer.jwtfilter.JwtFilter;



@SpringBootApplication
public class AuthenticationApplication {

	// Bean of JWT token for validating the JWT provided in header
		@Bean
		public FilterRegistrationBean jwtFilter() {
			
			FilterRegistrationBean registrationbean = new FilterRegistrationBean();
			registrationbean.setFilter(new JwtFilter());
			registrationbean.addUrlPatterns("/cplayer/api/*");
			return registrationbean;
			
		}

		public static void main(String[] args) {
			SpringApplication.run(AuthenticationApplication.class, args);
		}
}
