package com.project.Cplayer.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.project.Cplayer.service.LogService;
import com.project.Cplayer.service.UserService;
import com.project.Cplayer.exceptions.NoLogFoundException;
import com.project.Cplayer.exceptions.UserAlreadyExistsException;
import com.project.Cplayer.model.Log;
import com.project.Cplayer.model.User;


import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@CrossOrigin(origins="*",allowedHeaders="*")
public class UserAuthenticationController {

	static final long EXPIRATION = 900000;
	Map<String, String> map = new HashMap<>();
	@Autowired
	private UserService userService;
	@Autowired
	private LogService logService;

	public UserAuthenticationController(UserService userService) {
		this.userService = userService;
	}


	/* register a new user */
	@PostMapping("/register")
	public ResponseEntity<?> registerUser(@Valid @RequestBody User user) throws ServletException {
		try {
			
			userService.registerUser(user);
			map.clear();
			map.put("Time", new Date().toString());
			map.put("message", "Successful");
			map.put("status", HttpStatus.OK.toString());
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (UserAlreadyExistsException e) {
			map.clear();
			map.put("Time", new Date().toString());
			map.put("message", "UserEmail Already Exists !");
			map.put("status", HttpStatus.CONFLICT.toString());
			return new ResponseEntity<>(map, HttpStatus.CONFLICT);
		}

	}
	//login with user credentials
	@PostMapping("/login")
	public ResponseEntity<?> authenticate(@RequestBody User user) throws ServletException {
		String token = "";
		try {
			
			User userCheck = userService.getUserByEmailandPassword(user.getUserEmail(), user.getUserPassword());
		
			token = getToken(userCheck.getUserEmail(),userCheck.getUserPassword());
		
			Log log = new Log();
			log.setGenDate(new Date());
			log.setToken(token);
			log.setUid(userCheck.getUserId());
			log.setExpiringTime(EXPIRATION);
			logService.insertLog(log);
			map.clear();
			map.put("user", userCheck.getUserName());
			map.put("userEmail", userCheck.getUserEmail());
			map.put("Time", new Date().toString());
			map.put("message", "user Successful logged In");
			map.put("token", token);
			map.put("status", HttpStatus.OK.toString());
			return new ResponseEntity<>(map, HttpStatus.OK);
		} catch (Exception e) {
			
			String errorMessage = e.getMessage();
			map.clear();
			map.put("Time", new Date().toString());
			map.put("message", errorMessage);
			map.put("token", null);
			map.put("status", HttpStatus.UNAUTHORIZED.toString());
			return new ResponseEntity<>(map, HttpStatus.UNAUTHORIZED);
		}
	}
	//authorizing the user is valid or not
	@GetMapping("/auth")
	public ResponseEntity<?> authenticate(@RequestHeader("authorization") String token){

		try{
			boolean status = logService.validLogByToken(token);
			if(status)
			{
				map.clear();
				map.put("Time", new Date().toString());
				map.put("token", token);
				map.put("status", HttpStatus.OK.toString());
				return new ResponseEntity<>(map, HttpStatus.OK); 
			}
			else
			{
				map.clear();
				map.put("Time", new Date().toString());
				map.put("token", null);
				map.put("status", HttpStatus.UNAUTHORIZED.toString());
				return new ResponseEntity<>(map,HttpStatus.UNAUTHORIZED);
			}
				
		}
		catch( NoLogFoundException e){
			String errorMessage = e.getMessage();
			map.clear();
			map.put("Time", new Date().toString());
			map.put("message", errorMessage);
			map.put("token", null);
			map.put("status", HttpStatus.NOT_FOUND.toString());
			return new ResponseEntity<>(map,HttpStatus.NOT_FOUND);
		}
	}

//generation of the token
	public String getToken(String userEmail, String userPassword) throws Exception {

		if(userEmail==null || userPassword==null)
			throw new ServletException();
		
		User user = userService.getUserByEmailandPassword(userEmail, userPassword);

		if (user == null)
			throw new ServletException();

		String jwt = Jwts.builder().setSubject(userEmail).signWith(SignatureAlgorithm.HS256, "secretkey").compact();
		return jwt;
		
	
	}

}




