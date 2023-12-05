import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Account() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setUser(user);
  };
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const user = await client.account();
      setUser(user);
    } catch (error) {
      navigate("/project/users/signin");
    }
  };
  const save = async () => {
    const status = await client.updateUser(user._id, user);
  };
  const updateUser = async () => {
    const status = await client.updateUser(user._id, user);
  };
  const signout = async () => {
    const status = await client.signout();
    navigate("/project/users/signin");
  };
  useEffect(() => {
    if (id) {
      findUserById(id);
    } else
    fetchUser();
  }, []);
  return (
    <div>
      <h1>Account</h1>
      {user && (
        <div>
          <input
            type="text"
            className="form-control"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            value={user.firstName}
            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          <input
            type="text"
            className="form-control"
            value={user.lastName}
            onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          <input
            //"2023-12-06T00:00:00.000Z"
            type="date"
            className="form-control"
            value={user.dob}
            onChange={(e) => setUser({ ...user, dob: e.target.value })}
            />
          <input
            type="email"
            className="form-control"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="text"
            className="form-control"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            />
          <p>Role: only can change to "STUDENT", "FACULTY", "ADMIN", "USER"</p>
          <button onClick={updateUser} className="btn btn-primary">
            Update
          </button>
          <button onClick={signout} className="btn btn-danger">
            Sign Out
          </button>
          <button onClick={save} className="btn btn-primary" >
            Save
          </button>

          {user.role === "ADMIN" && (
            <Link to="/project/admin/users" className="btn btn-warning">
              Users
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default Account;