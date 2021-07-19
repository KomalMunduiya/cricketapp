package com.project.Cplayer.repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.project.Cplayer.model.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {
    //Getting the user details with his email and password
	@Query("select u from User u where u.userEmail = (?1) and u.userPassword= (?2)")
	User findByUserEmailAndUserPassword(String userEmail, String userPassword);
	//Getting the user details with his email 
	@Query("select u from User u where u.userEmail=(?1)")
	User findByUserEmail(String userEmail);
	//Getting the user details with his password
	@Query("select u from User u where u.userPassword=(?1)")
	User findByUserPassword(String userPassword);
	
}