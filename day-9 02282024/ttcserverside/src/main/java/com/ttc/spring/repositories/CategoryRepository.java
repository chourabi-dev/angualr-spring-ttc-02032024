package com.ttc.spring.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ttc.spring.entities.Category;

public interface CategoryRepository extends JpaRepository<Category,Long> {

	
	
	// Category  // List<Category>
	
	
	/*
	@Query( value="SELECT * FROM CATEGOREIS WHERE NAME = ?" )
	List<Category> sarraSearching( String name );*/
	
	
	List<Category> findByIdGreaterThan( long id );
	
	List<Category> findByIdGreaterThanAndNameContains( long id, String name );
	
	
	
	
	
	
}
