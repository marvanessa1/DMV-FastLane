import React, {useState} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';

// import { QUERY_USER, QUERY_ME } from '../utils/queries';
import {ADD_TICKET} from '../utils/mutations'

import Auth from '../utils/auth';

const Form = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [notes, setNotes] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [addTicket, {error}] = useMutation(ADD_TICKET);
    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either firstname, lastname, and notes
        if (inputType === 'firstname') {
            setFirstname(inputValue);
        } else if (inputType === 'lastname') {
            setLastname(inputValue);
        } else {
            setNotes(inputValue);
        }
    };

    const handleFormSubmit = async (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the firstname is not valid or if the lastname is empty. If so we set an error message to be displayed on the page.
        if (!(firstname) || !lastname) {
            setErrorMessage('Firstname or lastname is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the notes is not valid. If so, we set an error message regarding the notes.
        }
        if (!(notes)) {
            setErrorMessage(
                `Choose a more secure notes for the account: ${lastname}`
            );
            return;
        }
        alert(`Hello ${lastname}`);
        const{data} = await addTicket({
            variables: {firstName:firstname, lastName: lastname}

        })

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setLastname('');
        setNotes('');
        setFirstname('');
    };

    return (
        <div>
            <p>Hello {lastname}</p>
            <form className="form">
                <input
                    value={firstname}
                    name="firstname"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="firstname"
                />
                <input
                    value={lastname}
                    name="lastname"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="lastname"
                />
                <select>
                    <option>Option 1 </option>

                </select>
                <textarea
                    value={notes}
                    name="notes"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Notes"
                ></textarea>
                <button type="button" onClick={handleFormSubmit}>Submit</button>
                <button type = "button" >Delete</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );    
};

export default Form;
