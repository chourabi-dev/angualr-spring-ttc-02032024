package com.ttc.spring.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ttc.spring.entities.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {

}
