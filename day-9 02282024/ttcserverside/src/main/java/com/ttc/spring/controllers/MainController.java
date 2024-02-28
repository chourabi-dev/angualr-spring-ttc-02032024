package com.ttc.spring.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ttc.spring.dto.AuthModel;
import com.ttc.spring.dto.GeneralResponse;

@RestController
@RequestMapping("/main")
public class MainController {
	
	
	// HELLO WORLD
	@RequestMapping("/hello")
	public String sayHello() {
		return "hello world";
	}
	
	
	// GET POST REQUESTBODY   PUT DELETE
	
	
	@GetMapping("/test")
	public String test() {
		return "test";
	}
	
	// PARAMS
	@GetMapping("/somme")
	public int somme( 
			@RequestParam(name="x", required=true) int x, 
			@RequestParam(name="y", required=true) int y  
	) {
		return (x+y);
	}
	
	
	
	// PATH VARIABLE
	
	/*
	 * /user/details/10
	 * /user/details/11
	 * /user/details/12
	 * ..
	 * 
	 * 
	 * 
	 * */
	
	
	@GetMapping("/user/details/{id}")
	public String getUserByID(  @PathVariable( name="id") String id  ) {
		
		return "Laoding user N° ".concat(id);
		
	}
	
	
	
	@PostMapping("/auth")
	public void auth(   @RequestBody AuthModel model    ) {
		String username;
		String password;
		
		
		username = model.getUsername();
		password = model.getPassword();
		
		
		// ...
		
		System.out.println(username);
		System.out.println(password);
	 
		
	}
	
	
	
	
	@PutMapping("/auth/v2")
	public void auth_two(   @RequestBody AuthModel model    ) {
		String username;
		String password;
		
		
		username = model.getUsername();
		password = model.getPassword();
		
		
		// ...
		
		System.out.println(username);
		System.out.println(password);
	 
		
	}
	
	
	@DeleteMapping("/delete/user/{id}")
	public void deleteUser( @PathVariable(name="id") int id ) {
		// DB 
		
	}
	
	
	// ResponseEntity
	@GetMapping("/test/response")
	public ResponseEntity<?> testResponse(){
		
		/**
		 * HashMap<String,String> map = new HashMap<String,String>();
		
		
		map.put("success", "ok");
		map.put("message", "done");
		
		
		
		return ResponseEntity.status(200).body( map );
		 */
		return ResponseEntity.status(200).body( new GeneralResponse(true,"user insrted !!") );
	}
	
	

}
