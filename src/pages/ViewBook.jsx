import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const ViewBook = () => {
  const [books, setBooks] = useState([])
  const navigate = useNavigate()

  const fetchBooks = () => {
    axios
      .get('http://library-management-backend-mbvq.onrender.com/api/books')
      .then((res) => {
        setBooks(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const handleUpdate = (id) => {
    console.log("Edit Book ID:", id)
    navigate(`/updatebook/${id}`)
  }

  const handleDelete = (id) => {
    axios
      .delete(`http://library-management-backend-mbvq.onrender.com/api/books/delete/${id}`)
      .then(() => {
        toast.success('Book Deleted')
        fetchBooks()
      })
      .catch(() => {
        toast.error('Failed to delete')
      })
  }

  return (
    <>
      <Navbar />
      <center>
        <h1>View Books</h1>
      </center>

      {books.map((x) => (
        <div key={x.bookId}>
          <p><b>Name:</b> {x.bookName}</p>
          <p><b>Category:</b> {x.category}</p>
          <p><b>Author:</b> {x.author}</p>
          <p><b>Price:</b> {x.price}</p>

          <button onClick={() => handleUpdate(x.bookId)}>
            Edit
          </button>

          <button onClick={() => handleDelete(x.bookId)}>
            Delete
          </button>

          <hr />
        </div>
      ))}
    </>
  )
}

export default ViewBook