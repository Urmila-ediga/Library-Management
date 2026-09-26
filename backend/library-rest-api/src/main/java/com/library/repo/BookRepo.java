package com.library.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.library.entity.Book;

public interface BookRepo extends JpaRepository<Book,Integer> {

	
}
