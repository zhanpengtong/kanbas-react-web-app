import * as client from './client';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UserList() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <div className="list-group">
                {users.map((user) => (
                    <Link
                    key={user._id}
                    to={`/project/users/${user._id}`}
                    className="list-group-item"
                  >
                    {user.username}
                  </Link>
                ))}
            </div>
        </div>
    );
}
export default UserList;