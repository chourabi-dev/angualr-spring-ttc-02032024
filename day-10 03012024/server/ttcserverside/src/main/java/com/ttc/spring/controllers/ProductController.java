package com.ttc.spring.controllers;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ttc.spring.dto.GeneralResponse;
import com.ttc.spring.dto.ProductModel;
import com.ttc.spring.entities.Product;
import com.ttc.spring.services.*;

@RestController
@RequestMapping("/api/v1")
public class ProductController {
	
	
	
	@Autowired
	private ProductService ProductService;
	
	
	
	@GetMapping("/product")
	public ResponseEntity<?> getAll(){
		List<Product> products = this.ProductService.getProductRepository().findAll();
		
		
		return ResponseEntity.ok(products);
	}
	 
	
	
	@PostMapping("/product")
	public ResponseEntity<?> add(  @RequestBody ProductModel model ){
		
		try {
			Product p =new Product();
			
			p.setProduct(model.getProduct());
			p.setPrice(model.getPrice());
			p.setStock(p.getStock());
			
			p.setCategory( this.ProductService.getCategoryRepository().findById( model.getCategory() ).get() );
			
			
			this.ProductService.getProductRepository().save(p);
			
			
			return ResponseEntity.status(200).body( new GeneralResponse(true,"Product insered successfully.") );
			
			
		}catch( NoSuchElementException e ) {
			return ResponseEntity.status(404).body( new GeneralResponse(false,"Category not found.") );
		}
	}
	
	
	
	
	@PutMapping("/product/{id}")
	public ResponseEntity<?> update(  @RequestBody ProductModel model, @PathVariable(name="id") long id ){
		
		try {
			Product p = this.ProductService.getProductRepository().findById(id).get();
			
			p.setProduct(model.getProduct());
			p.setPrice(model.getPrice());
			p.setStock(p.getStock());
			
			p.setCategory( this.ProductService.getCategoryRepository().findById( model.getCategory() ).get() );
			
			
			this.ProductService.getProductRepository().save(p);
			
			
			return ResponseEntity.status(200).body( new GeneralResponse(true,"Product updated successfully.") );
			
			
		}catch( NoSuchElementException e ) {
			return ResponseEntity.status(404).body( new GeneralResponse(false,"Element not found") );
		}
	}
	
	
	
	
	
	
	@DeleteMapping("/product/{id}")
	public ResponseEntity<?> delete(  @PathVariable(name="id") long id ){
		
		try {
			Product p = this.ProductService.getProductRepository().findById(id).get();
			
			 
			this.ProductService.getProductRepository().delete(p);
			
			
			return ResponseEntity.status(200).body( new GeneralResponse(true,"Product deleted successfully.") );
			
			
		}catch( NoSuchElementException e ) {
			return ResponseEntity.status(404).body( new GeneralResponse(false,"Element not found") );
		}
	}
	

}
