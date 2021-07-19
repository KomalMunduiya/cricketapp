package com.project.Cplayer.service;



import com.project.Cplayer.exceptions.UserAlreadyExistsException;
import com.project.Cplayer.exceptions.UserNotFoundException;
import com.project.Cplayer.model.User;

public interface UserService {
	
	User registerUser(User user) throws UserAlreadyExistsException;

	//User updateUser(String userName,String userEmail) throws UserNotFoundException;

	User changePassword(String userPassword, String userEmail) throws Exception;

	User getUserByEmailandPassword(String userEmail, String userPassword) throws UserNotFoundException;
 

	


}
