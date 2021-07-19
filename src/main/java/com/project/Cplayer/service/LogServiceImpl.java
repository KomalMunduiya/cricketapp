package com.project.Cplayer.service;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.Cplayer.exceptions.UserAlreadyExistsException;

import com.project.Cplayer.exceptions.NoLogFoundException;
import com.project.Cplayer.model.Log;
import com.project.Cplayer.repository.LogRepository;



@Service
public class LogServiceImpl implements LogService {
	
	@Autowired
	private LogRepository logRepository;
	
	 /* register a new user */
	
	public Log insertLog(Log log) throws UserAlreadyExistsException {
		if(log != null)
			return logRepository.save(log);
		else
			return null;
	}
   // validating the log by token
	public boolean validLogByToken(String token)throws NoLogFoundException{
		boolean status = false;
		List<Log> validLogs = logRepository.findByToken(token);
		if(validLogs.size() < 1)
			throw new NoLogFoundException("No Log Exists !");
		else{
		Iterator itr = validLogs.iterator();

		while(itr.hasNext()){
			Log log = (Log)itr.next();
			if(log.getToken().equals(token))
			{
				status = true;
				break;
			}
		}
		return status;
	}
}}


	