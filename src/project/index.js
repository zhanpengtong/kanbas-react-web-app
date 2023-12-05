import Home from "./home";
import Profile from "./profile";
import Search from "./search";
import Details from "./details";
import Signin from "./users/signin.js";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import UserList from "./users/list.js";
import UserDetails from "./users/details.js";
import Account from "./users/account.js";
import UserTable from "./users/table.js";
import Signup from "./users/signup.js";

function Project() {
  const [key, setKey] = useState("home");

  return (
    <div className="container-fluid">
      <h1>Project</h1>
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <Link to="/project/" className="list-group-item">
              Home
            </Link>
            <Link to="/project/users/Signin" className="list-group-item">
              Signin
            </Link>
            <Link to="/project/users/signup" className="list-group-item">
              Signup
            </Link>
            <Link to="/project/profile" className="list-group-item">
              Profile
            </Link>
            <Link to="/project/search" className="list-group-item">
              Search
            </Link>
            <Link to="/project/users" className="list-group-item">
              Users
            </Link>
            <Link to="/project/users/Account" className="list-group-item">
              Account
            </Link>
            {/* <Link to="/project/details" className="list-group-item">
              Details
            </Link> */}
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/Signin" element={<Signin />} />
            <Route path="/users/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/:search" element={<Search />} />
            <Route path="/details/:albumId" element={<Details />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetails />} />
            <Route path="/users/account" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />
            <Route path="/users/account/:id" element={<Account />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;