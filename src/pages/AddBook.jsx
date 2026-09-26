import {useState} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const AddBook = () => {
  const [bookName, setBookName] = useState("")
  const [category, setCategory] = useState("")
  const [author, setAuthor] = useState("")
  const [price, setPrice] = useState("")
  const navigate = useNavigate()

  function handleForm(e){
    e.preventDefault()
    const bookData = {bookName,category,author,price}
    axios.post("http://library-management-backend-mbvq.onrender.com/api/books/add", bookData)
    .then(()=>{
      toast.success("Book Added")
      setBookName("")
      setCategory("")
      setAuthor("")
      setPrice("")
      navigate("/viewbook")
    })
    .catch(err=>{
      toast.error("Failed...")
    })
  }

  return (
    <>
    <Navbar/>
      <center><h1>Add Book</h1></center>
      <center>
        <form onSubmit={handleForm}>
          <input type="text" placeholder='Enter Book Name' required value={bookName} onChange={(e)=>{setBookName(e.target.value)}} /> <br />
          <input type="text" placeholder='Enter Category' required value={category} onChange={(e)=>{setCategory(e.target.value)}} /> <br />
          <input type="text" placeholder='Enter Author' required value={author} onChange={(e)=>{setAuthor(e.target.value)}} /> <br />
          <input type="number" placeholder='Enter Price' required value={price} onChange={(e)=>{setPrice(e.target.value)}} /> <br />
          <button>Add</button>
          
        </form>
        
        
      </center>
    </>
  )
}

export default AddBook