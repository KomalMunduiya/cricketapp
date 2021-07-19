package com.project.Cplayer.service;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.project.Cplayer.exceptions.UserAlreadyExistsException;
import com.project.Cplayer.exceptions.UserNotFoundException;
import com.project.Cplayer.model.User;
import com.project.Cplayer.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	
	
	@Autowired
	private UserRepository userRepository;
	
	 /* register a new user */
	
	public User registerUser(User user) throws UserAlreadyExistsException {
		User user1=userRepository.findByUserEmail(user.getUserEmail());
		if (user1 !=null)
			throw new UserAlreadyExistsException("UserAlreadyExistsException");
		else {
			User userObj = userRepository.save(user);
			return userObj;
	}}

	

	/* update a new user (changes to be done for other fields)*/  
	public User updateUser(String userName, String userEmail) throws UserNotFoundException {
		User user = userRepository.findByUserEmail(userEmail);		
		if(user == null)
				throw new UserNotFoundException("Not Found User!");
		else{
		user.setUserName(userName);
		userRepository.save(user);
		return user;
		}
	}

	/*to change password*/
	public User changePassword(String userPassword, String userEmail) throws UserNotFoundException{
		
			User user = userRepository.findByUserEmail(userEmail);
			
			if(user == null)
				throw new UserNotFoundException("Not Found User!");
		else
		{
			String pwdCheck = user.getUserPassword();
			if(pwdCheck.equals(userPassword))
				throw new UserNotFoundException("Wrong Password Error !");
			else
			{
				
				user.setUserPassword(userPassword);
				userRepository.save(user);
				return user;
			}
		}
	}


	/*to login a user */
	public User getUserByEmailandPassword(String userEmail, String userPassword) throws UserNotFoundException {
		User userObj = userRepository.findByUserEmailAndUserPassword(userEmail, userPassword);
		if(userObj==null)
			throw new UserNotFoundException("UserNotFoundException");
		else
			return userObj;
	}
	
	
public User getUserbyToken(String id){
		// List<User> userList = new ArrayList<User>();
		return null;
	}
}


