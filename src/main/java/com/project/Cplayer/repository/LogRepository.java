package com.project.Cplayer.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.project.Cplayer.model.Log;

@Repository
public interface LogRepository extends CrudRepository<Log, Integer> {

	List<Log> findByToken(String token);

	
}