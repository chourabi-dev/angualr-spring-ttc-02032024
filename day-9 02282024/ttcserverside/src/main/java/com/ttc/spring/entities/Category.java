package com.ttc.spring.entities;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table( name="categories" )
public class Category {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // ID AUTOINCREMENT
	private long id;
	
	
	@Column( name="name", nullable=false, length = 400, unique=true )
	private String name;
	
	
	@OneToMany( mappedBy="category" )
	private List<Product> products;
	
	
	


	public List<Product> getProducts() {
		return products;
	}


	public void setProducts(List<Product> products) {
		this.products = products;
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public Category(long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}


	public Category() {
		super();
	}
	
	
}
