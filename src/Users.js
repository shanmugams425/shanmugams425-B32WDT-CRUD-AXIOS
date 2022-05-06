import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import UserContext from "./Usercontext";
import { useState } from "react";
import swal from 'sweetalert';



function Users() {
//  const userContext = useContext(UserContext)

 const [user, setUser] = useState([])
 useEffect(() => {
  async function fd() {
    let userss = await axios.get("https://6266443163e0f382567f001d.mockapi.io/student")
        setUser(userss.data)
     }
    fd();
       
 }, [])
 
 const deleteUser = (id) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      axios
        .delete(`https://6266443163e0f382567f001d.mockapi.io/student/${id}`)
        .then(() => {
          getData();
        });

      swal(" Your file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your file is safe!");
    }
  });
};

const getData = () => {
  axios
    .get(`https://6266443163e0f382567f001d.mockapi.io/student`)
    .then((getData) => {
      setUser(getData.data);
    });
};
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Student List</h1>
        <Link  to={"/create-User"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i class="fas fa-download fa-sm text-white-50"></i> Create User
        </Link >
      </div>

      
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </tfoot>
            <tbody>
            {
             user.map((users) => {
               return  <tr>
                <td>{users.name}</td>
                <td>{users.position}</td>
                <td>{users.office}</td>
                <td>{users.age}</td>
                <td>{users.startdate}</td>
                <td>{users.salary}</td>
                <td>
                <Link to={`/user-view/${users.id}`} className = "mr-1 btn btn-warning btn-sm">View</Link>
                  <Link to={`/user-edit/${users.id}`} className = "mr-1 btn btn-primary btn-sm">Edit</Link>
                  <button onClick={() => deleteUser(users.id)}className = "mr-1 btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              })
            }
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
