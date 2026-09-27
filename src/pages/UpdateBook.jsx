import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const UpdateBook = () => {
  const [bookName, setBookName] = useState('')
  const [category, setCategory] = useState('')
  const [author, setAuthor] = useState('')
  const [price, setPrice] = useState('')

  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://library-management-backend-mbvq.onrender.com/api/books/${id}`)
      .then((res) => {
        setBookName(res.data.bookName)
        setCategory(res.data.category)
        setAuthor(res.data.author)
        setPrice(res.data.price)
      })
      .catch((err) => {
        console.log(err)
        toast.error('Failed to load book')
      })
  }, [id])

  const handleUpdate = (e) => {
    e.preventDefault()

    const newData = {
      bookName,
      category,
      author,
      price,
    }

    axios
      .put(
        `https://library-management-backend-mbvq.onrender.com/api/books/update/${id}`,
        newData
      )
      .then(() => {
        toast.success('Book Updated Successfully')
        navigate('/viewbook')
      })
      .catch((err) => {
        console.log(err)
        toast.error('Failed to update')
      })
  }

  return (
    <>
      <Navbar />

      <center>
        <h1>Update Book</h1>

        <form onSubmit={handleUpdate}>
          <input
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            required
          />
          <br />

          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
          <br />

          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <br />

          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <br />

          <button type="submit">
            Update
          </button>
        </form>
      </center>
    </>
  )
}

export default UpdateBook