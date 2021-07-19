package com.project.Cplayer.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestHeader;

import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;



import com.project.Cplayer.service.UserService;

@RestController
@CrossOrigin(origins="*",allowedHeaders="*")
public class UserController {
	@Autowired
	private UserService userService;

	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}

	//update an existing userpassword 
	@PutMapping("/cmatch/api/change-password/{pass}")	
	public ResponseEntity<?> changePassword(@PathVariable("pass") String userPassword, @RequestHeader("authorization") String token){
				try {
					final Claims claims = Jwts.parser().setSigningKey("secretkey").parseClaimsJws(token).getBody();
					String userEmail = claims.getSubject();
					userService.changePassword(userPassword, userEmail);
					return new ResponseEntity<>(HttpStatus.OK);
				} catch (Exception e) {
					return new ResponseEntity<String>(HttpStatus.CONFLICT);
				}
			}
	

	
	

	
}
