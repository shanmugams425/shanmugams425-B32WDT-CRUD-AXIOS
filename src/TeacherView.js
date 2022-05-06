import axios, { Axios } from 'axios'
import React, { useContext, useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import UserContext from './Usercontext'

function TeacherView() {
    let params = useParams()
    // const userContext = useContext(UserContext)
    
  const [users, setusers] = useState({})
    useEffect( async () => {
     let user = await axios.get(`https://6266443163e0f382567f001d.mockapi.io/teacher/${params.id}`)
     setusers(user.data)
  }, [])
  
   
    return (
      <>
    <div className='text-center h1 text-danger'>Student details:
     
     </div >
      <div className='text-center mt-3 '>
         
      <p className='h4' ><span className='h4 text-primary'>Name : </span> {users.name}</p>
      <p className='h4' ><span className='h4 text-primary'>position : </span> {users.position}</p>
      <p className='h4' ><span className='h4 text-primary'>office : </span> {users.office}</p>
      <p className='h4' ><span className='h4 text-primary'>age : </span> {users.age}</p>
      <p className='h4' ><span className='h4 text-primary'>startdate : </span> {users.startdate}</p>
      <p className='h4' ><span className='h4 text-primary'>salary : </span> {users.salary}</p>

         </div>
     </>
  )
}

export default TeacherView;