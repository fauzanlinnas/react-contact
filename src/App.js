import React, { useState, useEffect } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

import { useAsyncRequest } from "./hooks";

const App = () => {
    const [data, loading] = useAsyncRequest(3);
    // Fixed array of users:
    // const [users, setUsers] = userList;
    const [users, setUsers] = useState(null);

    useEffect(() => {
        if (data) {
            const formattedUsers = data.map((obj) => {
                return {
                    id: obj.id,
                    firstName: obj.firstName,
                    lastName: obj.lastName,
                    age: obj.age,
                    photo: obj.photo
                };
            });
            setUsers(formattedUsers);
        }
    }, [data]);

    const addUser = (user) => {
        user.age = parseInt(user.age);
        setUsers([...users, user]);

        try {
            fetch(
                'https://simple-contact-crud.herokuapp.com/contact/', {
                method: 'POST',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'firstName': user.firstName,
                    'lastName': user.lastName,
                    'age': user.age,
                    'photo': user.photo
                })
            }
            );
        } catch (err) {
            console.warn("Something went wrong fetching the API...", err);
            alert("Something went wrong fetching the API...", err);
        }
    };

    const deleteUser = async (id) => {
        setUsers(users.filter((user) => user.id !== id));

        try {
            fetch(
                'https://simple-contact-crud.herokuapp.com/contact/' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }
            );
        } catch (err) {
            console.warn("Something went wrong fetching the API...", err);
            alert("Something went wrong fetching the API...", err);
        }
    };

    const [editing, setEditing] = useState(false);

    const initialUser = { id: null, name: "", username: "" };

    const [currentUser, setCurrentUser] = useState(initialUser);

    const editUser = (id, user) => {
        setEditing(true);
        setCurrentUser(user);
    };

    const updateUser = (newUser) => {
        setUsers(
            users.map((user) => (user.id === currentUser.id ? newUser : user))
        );
        setCurrentUser(initialUser);
        setEditing(false);

        try {
            fetch(
                'https://simple-contact-crud.herokuapp.com/contact/' + newUser.id, {
                method: 'PUT',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'firstName': newUser.firstName,
                    'lastName': newUser.lastName,
                    'age': newUser.age,
                    'photo': newUser.photo
                })
            }
            );
        } catch (err) {
            console.warn("Something went wrong fetching the API...", err);
            alert("Something went wrong fetching the API...", err);
        }
    };

    return (
        <div className="container">
            <h1>Contacts</h1>
            <div className="row">
                <div className="five columns">
                    {editing ? (
                        <div>
                            <h2>Edit contact</h2>
                            <EditUserForm
                                currentUser={currentUser}
                                setEditing={setEditing}
                                updateUser={updateUser}
                            />
                        </div>
                    ) : (
                            <div>
                                <h2>Add contact</h2>
                                <AddUserForm addUser={addUser} />
                            </div>
                        )}
                </div>
                {loading || !users ? (
                    <p>Loading...</p>
                ) : (
                        <div className="seven columns">
                            <h2>View contacts</h2>

                            <UserTable
                                users={users}
                                deleteUser={deleteUser}
                                editUser={editUser}
                            />
                        </div>
                    )}
            </div>
        </div>
    );
};

export default App;
