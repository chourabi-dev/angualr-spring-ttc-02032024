package com.ttc.spring.controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ttc.spring.dto.CategoryModel;
import com.ttc.spring.dto.GeneralResponse;
import com.ttc.spring.entities.Category;
import com.ttc.spring.repositories.CategoryRepository;

@RestController
@RequestMapping("/api/v1")
public class CategoryController {

	
	@Autowired
	private CategoryRepository categoryRepository;
	
	
	//GET 
	@GetMapping("/category")
	public ResponseEntity<?> getAllCategories(){
		// ??
		// SELECT * FROM CATEGOREIS
		
		 List<Category> categories= this.categoryRepository.findAll();
		
		// List<Category> categories= this.categoryRepository.findByName("ELECTRONICS")
		
		return ResponseEntity.status(200).body(categories);
	}
	
	
	// POST
	@PostMapping("/category")
	public ResponseEntity<?> add(  @RequestBody CategoryModel model   ){

		
		// 1 CREATE THE ENTITY !!!
		Category c = new Category();
		
		
		// 2 Fill the entity !!!
		
		c.setName( model.getName() );
		
		
		// 3 SAVE THE ENTITY !!!
		
		this.categoryRepository.save(c);
		
		
		return ResponseEntity.status(200).body( new GeneralResponse(true,"Category inserted successfully.") );
	}
	
	
	
	
	// PUT
	@PutMapping("/category/{id}")
	public ResponseEntity<?> update(  @RequestBody CategoryModel model , @PathVariable(name="id") long id  ){

		try {

			// GO SEARCH FOR THE ENEITY !!
			Category c = this.categoryRepository.findById(id).get();
			
			
			// 2 Fill the entity !!!
			
			c.setName( model.getName() );
			
			
			// 3 SAVE THE ENTITY !!!
			
			this.categoryRepository.save(c);
			
			
			return ResponseEntity.status(200).body( new GeneralResponse(true,"Category inserted successfully.") );
			
			
		}catch(NoSuchElementException e) {
			return ResponseEntity.status(200).body( new GeneralResponse(false,"Category not found.") );
			
		}
	}
	
	
	
	
	
	
	
	
	// DELETE
	
	@DeleteMapping("/category/{id}")
	public ResponseEntity<?> delete(   @PathVariable(name="id") long id  ){

		try {

			// GO SEARCH FOR THE ENEITY !!
			Category c = this.categoryRepository.findById(id).get();
			
			 
			
			
			// 3 DLETE THE ENTITY !!!
			
			this.categoryRepository.delete(c);
			
			
			return ResponseEntity.status(200).body( new GeneralResponse(true,"Category deleted successfully.") );
			
			
		}catch(NoSuchElementException e) {
			return ResponseEntity.status(200).body( new GeneralResponse(false,"Category not found.") );
			
		}
	}
	
	
	
	
	
	
	
}
