package com.ttc.spring.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ttc.spring.repositories.*;

@Service
public class ProductService {
	
	
	
	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private CategoryRepository categoryRepository;
	
	
	

	public ProductRepository getProductRepository() {
		return productRepository;
	}

	public CategoryRepository getCategoryRepository() {
		return categoryRepository;
	}

	
	
	
	
}
