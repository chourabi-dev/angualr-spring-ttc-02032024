package com.ttc.spring.entities;

import jakarta.persistence.*;

@Entity
@Table( name="categories" )
public class Category {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO) // ID AUTOINCREMENT
	private long id;
	
	
	@Column( name="name", nullable=false, length = 400, unique=true )
	private String name;


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
