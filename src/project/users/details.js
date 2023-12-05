import React from "react";
import { useParams, useNavigate } from "react-router";
import * as client from "./client";
import { useEffect, useState } from "react";
function UserDetails() {
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();
    const fetchUser = async () => {
        const user = await client.findUserById(id);
        setUser(user);
    };
    const updateUser = async () => {
        const status = await client.updateUser(id, user);
        navigate("/project/users");
    };
    const deleteUser = async (id) => {
        const status = await client.deleteUser(id);
        navigate("/project/users");
    };
    useEffect(() => {
        fetchUser();
    }, []);
    return (
        <div>
            <h2>User Details</h2>
            {user && (
                <div>
                    <p>Username: {user.username}</p>
                    <p>Email: {user.email}</p>
                    <p>
                        First Name:
                        <input
                            type="text"
                            className="form-control"
                            value={user.firstName}
                            onChange={(e) => setUser({ ...user, firstName: e.target.value })}
                        />
                    </p>
                    <p>Last Name: {user.lastName}</p>
                    <button className="btn btn-primary" onClick={updateUser}>
                        Update
                    </button>
                    <button className="btn btn-danger" onClick={() => deleteUser(user._id)}>
                        Delete
                    </button>
        </div>
            )}
        </div>
    );
}
export default UserDetails;