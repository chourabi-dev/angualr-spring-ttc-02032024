package com.ttc.spring.dto;

public class ProductModel {
	
	private String product;
	private float  price;
	private int    stock;
	private long   category;
	
	
	
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
	public long getCategory() {
		return category;
	}
	public void setCategory(long category) {
		this.category = category;
	}
	public ProductModel() {
		super();
	}
	
	
	
	

}
