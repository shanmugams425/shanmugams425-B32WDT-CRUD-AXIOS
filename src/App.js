import "./App.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Users from "./Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./CreateUser";
import UserView from "./UserView";
import UserEdit from "./UserEdit";
import { UserProvider } from "./Usercontext";
import { useState } from "react";
import Teacherdetails from "./Teacherdetails";



function App() {
  const [userName, setUserName] = useState([]);
  return (
    <BrowserRouter>
      <div id="wrapper">
        <UserProvider value={{ userName, setUserName }}>
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/Teacherdetails" element={<Teacherdetails />} />
                  <Route path="/create-User" element={<CreateUser />} />
                  <Route path="/user-view/:id" element={<UserView />} />
                  <Route path="/user-edit/:id" element={<UserEdit />} />
                  <Route path="/teacher-view/:id" element={<UserView />} />

                </Routes>
              </div>
            </div>
          </div>
        </UserProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
