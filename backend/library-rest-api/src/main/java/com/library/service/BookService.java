package com.library.service;

import java.util.List;

import com.library.entity.Book;

public interface BookService {
	 Book saveBook(Book book);
	 List<Book>getAllBooks();
	 Book updateBook(Integer id,Book updatedBook);
	 Book updateBookPartially(Integer id,Book updatedBook);
	 void deleteBookById(Integer id);
	 Book getBookById(Integer id);

}
