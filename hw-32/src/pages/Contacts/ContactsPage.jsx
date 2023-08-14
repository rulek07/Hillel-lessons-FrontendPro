import { useLoaderData, useNavigation } from "react-router-dom"
import React, { useState } from "react";

export const Contacts = () => {
    const { contacts } = useLoaderData();
    const { state } = useNavigation();
    const [userContacts, setUserContacts] = useState(contacts);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [isChecked, setIsChecked] = useState(false)

    const delButton = (deletedId) => {
        const updatedData = userContacts.filter((item) => item.id !== deletedId);
        setUserContacts(updatedData);   
    }

    function hideForm() {
        setIsChecked(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newContact = {
            id: new Date().toISOString(),
            name: name,
            username: username,
            phone: phone,
            }
            setUserContacts([...userContacts, newContact]);
            setIsChecked(false)
            setName("");
            setUsername("");
            setPhone("");
        }

    return (
        <>
            {state === 'loading' 
                ? 
                <p>Loading . . .</p> 
                :
                <table>
                    <thead>
                        <tr>
                            <td><h3>Name</h3> </td>
                            <td><h3>Username</h3></td>
                            <td><h3>Phone</h3></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {userContacts.map(contact =>
                        <tr key={contact.id}>
                            <td>{contact.name}</td>
                            <td>{contact.username}</td>
                            <td>{contact.phone}</td>
                            <td><button className="del-button" onClick={() => delButton(contact.id)}>DEL</button></td>
                        </tr>)}
                    </tbody>
                </table> 
            }
            {!isChecked
                ?  
                <div className="btn-box"><button id='add-btn' onClick={() => setIsChecked(!isChecked)}>Add contact</button></div>  
                :
                <form className="form" onSubmit={handleSubmit}>
                    <input id="name" value={name} type="text" placeholder="Name" required onChange={(e) => setName(e.target.value)}/>
                    <input id="username" value={username} type="text" placeholder="Userame" required onChange={(e) => setUsername(e.target.value)}/>
                    <input id="phone" value={phone} type="phone" placeholder="Phone" required onChange={(e) => setPhone(e.target.value)}/>
                    <button type="submit">ADD</button>
                    <button type="reset" onClick={hideForm}>RESET</button>
                </form>
            }
        </>  
    )
}