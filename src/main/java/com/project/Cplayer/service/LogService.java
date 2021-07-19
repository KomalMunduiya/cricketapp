package com.project.Cplayer.service;



import com.project.Cplayer.exceptions.UserAlreadyExistsException;

import com.project.Cplayer.exceptions.NoLogFoundException;
import com.project.Cplayer.model.Log;


public interface LogService {
	
	Log insertLog(Log log) throws UserAlreadyExistsException;

	boolean validLogByToken(String token) throws NoLogFoundException;
	


}
