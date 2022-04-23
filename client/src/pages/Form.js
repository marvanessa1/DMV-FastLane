import React, { useState } from "react";
// import { Navigate, useParams } from 'react-router-dom';
import { useMutation } from "@apollo/client";
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_TICKET } from "../utils/mutations";
// import Auth from '../utils/auth';
import { services } from "../utils/services";

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [notes, setNotes] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [addTicket, { error }] = useMutation(ADD_TICKET);
  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either firstname, lastname, and notes
    if (inputType === "firstname") {
      setFirstname(inputValue);
    } else if (inputType === "lastname") {
      setLastname(inputValue);
    } else {
      setNotes(inputValue);
    }
  };

  const handleFormSubmit = async (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the firstname is not valid or if the lastname is empty. If so we set an error message to be displayed on the page.
    if (!firstname || !lastname) {
      setErrorMessage("Firstname or lastname is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the notes is not valid. If so, we set an error message regarding the notes.
    }
    if (!notes) {
      setErrorMessage(
        `Choose a more secure notes for the account: ${lastname}`
      );
      return;
    }
    alert(`Hello ${lastname}`);
    const { data } = await addTicket({
      variables: { firstName: firstname, lastName: lastname },
    });

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setLastname("");
    setNotes("");
    setFirstname("");
  };

  return (
    <div className="col-12 col-lg-10">
      <div className="card">
        <h4 className="card-header bg-blue text-white p-2">Add to queue</h4>
        <div className="card-body">
          <form className="form">
            <input
              className="form-input"
              value='First Name'
              name="firstname"
              onChange={handleInputChange}
              type="text"
              placeholder="firstname"
            />
            <input
              className="form-input"
              value='Last Name'
              name="lastname"
              onChange={handleInputChange}
              type="text"
              placeholder="lastname"
            />
            <select name="Renew License"
            style={{ lineHeight: "2", width: "250px", paddingLeft: "12px"}}>
              {services.map((services) => {
                return (
                  <option>
                    {services.name}
                  </option>
                );
              })}
            </select>
            <textarea
              className="form-input w-100"
              value='Notes'
              name="notes"
              onChange={handleInputChange}
              type="text"
              placeholder="Notes"
              style={{ lineHeight: "1.5", resize: "vertical" }}
            ></textarea>
            <div>
              <button
                className="btn btn-lg btn-primary m-1"
                type="button"
                onClick={handleFormSubmit}
              >
                Submit
              </button>
              <button className="btn btn-lg btn-warning m-1" type="button">
                Delete
              </button>
            </div>
          </form>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
