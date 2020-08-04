import React from 'react';

const UserTable = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Photo</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => {
                        const { id, firstName, lastName, age, photo } = user;
                        return (
                            <tr key={id}>
                                <td>
                                    <img
                                        src={photo}
                                        alt="profpic"
                                        style={{ maxHeight: '100px' }}
                                    />
                                </td>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{age}</td>
                                <td>
                                    <button onClick={() => props.deleteUser(id)}>Delete</button>
                                    <button onClick={() => props.editUser(id, user)}>Edit</button>
                                </td>
                            </tr>
                        )
                    })
                ) : (
                        <tr>
                            <td colSpan={4}>No users found</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default UserTable;