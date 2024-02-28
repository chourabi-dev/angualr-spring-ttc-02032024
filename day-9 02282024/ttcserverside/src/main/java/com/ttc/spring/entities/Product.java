package com.ttc.spring.entities;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;

@Entity
@Table( name="products" )
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // ID AUTOINCREMENT
	private long id;
	
	
	@Column( name="product_name", nullable=false, unique=true )
	private String product;
	
	
	@Column( name="product_price", nullable=false )
	private float price;
	
	
	@Column( name="product_stock", nullable=false )
	private int stock = 0;
	
	
	@Column( name="product_createdAt", nullable=false )
	private LocalDateTime createdAt = LocalDateTime.now();
	
	
	
	@ManyToOne
	@JoinColumn( name="categories_id" )
	@JsonIgnore
	private Category category;



	public long getId() {
		return id;
	}



	public void setId(long id) {
		this.id = id;
	}



	public String getProduct() {
		return product;
	}



	public void setProduct(String product) {
		this.product = product;
	}



	public float getPrice() {
		return price;
	}



	public void setPrice(float price) {
		this.price = price;
	}



	public int getStock() {
		return stock;
	}



	public void setStock(int stock) {
		this.stock = stock;
	}



	public LocalDateTime getCreatedAt() {
		return createdAt;
	}



	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}



	public Category getCategory() {
		return category;
	}



	public void setCategory(Category category) {
		this.category = category;
	}



	public Product() {
		super();
	}
	
	
	
	
	
	

}
