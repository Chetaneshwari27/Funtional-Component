import React, { useEffect, useState } from 'react';

export default function Home() {
    const [state, setState] = useState({
        infoList: [],
        name: '',
        age: '',
        edit: null,
    });

    const { infoList, name, age, edit } = state;

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const addnew = { name, age };
        if (edit !== null) {
            const updated = [...infoList];
            updated[edit] = addnew;
            setState({
                ...state,
                name: '',
                age: '',
                infoList: updated,
                edit: null,
            });
        } else {
            const updated = [...infoList, addnew];
            setState({
                ...state,
                name: '',
                age: '',
                infoList: updated,
            });
        }
    };

    const handleDelete = (person) => {
        const delData = infoList.filter((ele) => ele !== person);
        setState({
            ...state,
            infoList: delData,
        });
    };

    const handleEdit = (person, index) => {
        setState({
            ...state,
            name: person.name,
            age: person.age,
            edit: index,
        });
    };
    useEffect(() => {
        console.log("compoent did update")
    })
    useEffect(() => {
        console.log("Component did mount")
    }, [])
    useEffect(() => {
        console.log("specific dependency")
    }, [edit])
    return (
        <div>
            <h3>Add Information</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Age:
                    <input type="text" name="age" value={age} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add</button>
            </form>
            <br /><br />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {infoList.map((person, index) => (
                        <tr key={index}>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td><button onClick={() => handleEdit(person, index)}>Edit</button></td>
                            <td><button onClick={() => handleDelete(person)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
