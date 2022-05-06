import React, { useContext } from 'react'
import { useFormik } from 'formik'
import UserContext from './Usercontext';
import axios from "axios";


function CreateUser() {
  const userContext = useContext(UserContext)
  let formik = useFormik({
    initialValues: {
     name : "",
     position : "",
     office : "",
     age : 0,
     startdate : "",
     salary : 0, 
    },
    validate : ( values ) => {
      const errors = {};

      if (!values.name) {
        errors.name  = 'Required';
      } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
      }

      return errors;
    },
    onSubmit: async (values) => {
    //   console.log(values);
    //  userContext.setUserName([...userContext.userName,values])

    try {
       await axios.post("https://6266443163e0f382567f001d.mockapi.io/student" , values)
       userContext.setUserName([...userContext.userName,values])
      } catch (error) {
      console.log(error)
    }
    
    },
  })
  return (
       <div className='container'>
      <form onSubmit={formik.handleSubmit}>
      <div>
        <div className='col-lg-6'>
                <label >Name</label>
                <input type={"text"}  
                 name="name"
                 onChange={formik.handleChange}
                 value={formik.values.name}
                 className='form-control'></input>
                 {formik.errors.name ? <div style={{color : "red"}}>{formik.errors.name}</div> : null }
            </div>

            <div className='col-lg-6'>
                <label >Position</label>
                <input type={"text"} 
                name="position"
                onChange={formik.handleChange}
                value={formik.values.position}
                className='form-control'></input>
            </div>

            <div className='col-lg-6'>
                <label >Office</label>
                <input type={"text"} 
                name="office"
                onChange={formik.handleChange}
                value={formik.values.office}
                className='form-control'></input>
            </div>

            <div className='col-lg-6'>
                <label >Age</label>
                <input type={"number"} 
                name="age"
                onChange={formik.handleChange}
                value={formik.values.age}
                className='form-control'></input>
            </div>

            <div className='col-lg-6'>
                <label >Start date</label>
                <input type={"Date"} 
                name="startdate"
                onChange={formik.handleChange}
                value={formik.values.startdate}
                className='form-control'></input>
            </div>

            <div className='col-lg-6'>
                <label >Salary</label>
                <input type={"text"} 
                name="salary"
                onChange={formik.handleChange}
                value={formik.values.salary}
                className='form-control'></input>
            </div>

            <div className='col-lg-6  m-5'>
                <input type={"submit"} className='btn btn-primary '></input>
            </div>
            </div>
      </form>
    </div>
  )
}

export default CreateUser 