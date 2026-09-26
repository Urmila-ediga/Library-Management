package com.library.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.library.entity.Book;
import com.library.exception.BookNotFoundException;
import com.library.service.BookService;
@CrossOrigin(origins="*")//to connect frontend with backend browser allowance//resourse sharing
//@Controller
//@ResponceBody
@RestController //@Conttroller +@ResponceBody enable 
@RequestMapping("/api/books") //base path
public class BookController {
	@Autowired
	BookService bservice;
//	@GetMapping("/dummy")
//	public String dummy() {
//		return "Hello World";
//	}
	@PostMapping("/add") //Post: /api/books/add end point it is
	public ResponseEntity<Book> addBook(@RequestBody Book book)
	{
		HttpHeaders header=new HttpHeaders();
		header.add("library", "It has some api info");// 1 way of writng response entity
		return new ResponseEntity<>(bservice.saveBook(book),header,HttpStatus.CREATED);//201 http status
	}
	@GetMapping
	public ResponseEntity<List<Book>> viewAllBooks(){
		return ResponseEntity.ok(bservice.getAllBooks());// 2nd way of writing response entity
	}
	@PutMapping("/update/{id}") //we have to update entire resource. if not,  the property assigned with null value
	public ResponseEntity<Book> updateBook(@PathVariable Integer id,@RequestBody Book updatedBook) {
		return ResponseEntity.status(200).body(bservice.updateBook(id,updatedBook));//another way writing Response entity
		
	}
	@PatchMapping("/update/{id}") //we  update resource partially.to update partially property should not be null. if not , the property assigned with existed default  value
	public Book updateBookPartially(@PathVariable Integer id,@RequestBody Book updatedBook) {
		return bservice.updateBookPartially(id,updatedBook);
		
	}
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<Void> deleteBook(@PathVariable Integer id) {
		
		bservice.deleteBookById(id);
		return ResponseEntity.noContent().build();
	}
	@GetMapping("/{id}")
	public ResponseEntity<Book> viewBook(@PathVariable Integer id)throws BookNotFoundException{
		Book book=bservice.getBookById(id);
		if(book==null)
		{
			throw new BookNotFoundException("Book not found with id: "+id);
		}
		else {
			return ResponseEntity.ok(book);
		}
	}
	//handling exception locally inside a controller
//	@ExceptionHandler(BookNotFoundException.class)
//	public ResponseEntity<String>handleBookNotFoundException(BookNotFoundException ex){
//		return ResponseEntity.status(404).body(ex.getMessage());
//	}
//	
}
