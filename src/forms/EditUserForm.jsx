import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.photo && user.firstName && user.lastName && user.age) props.updateUser(user);
    }

    return (
        <form>
            <label>Photo URL</label>
            <input className="u-full-width" type="text" value={user.photo} name="photo" onChange={handleChange} />
            <label>First Name</label>
            <input className="u-full-width" type="text" value={user.firstName} name="firstName" onChange={handleChange} />
            <label>Last Name</label>
            <input className="u-full-width" type="text" value={user.lastName} name="lastName" onChange={handleChange} />
            <label>Age</label>
            <input className="u-full-width" type="number" value={user.age} name="age" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;