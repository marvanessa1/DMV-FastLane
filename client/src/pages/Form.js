import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TICKET } from "../utils/mutations";
import { services } from "../utils/services";

const Form = () => {
  const [ticketData, setTicketData] = useState({
    firstName: "",
    lastName: "",
    service: "",
    description: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [addTicket, { error }] = useMutation(ADD_TICKET);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTicketData({ ...ticketData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    try {
      const { data } = await addTicket({
        variables: { ticketData: {...ticketData} },
      });

      if (!data) throw new Error("something went wrong!");
    } catch (err) {
      console.error(err);
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setTicketData({
      firstName: "",
      lastName: "",
      service: "",
      description: "",
    });
  };
  return (
    <div className="col-12 col-lg-10">
      <div className="card">
        <h4 className="card-header bg-blue text-white p-2">Add to queue</h4>
        <div className="card-body">
          <form className="form" onSubmit={handleFormSubmit}>
            <input
              className="form-input"
              value={ticketData.firstName}
              name="firstName"
              onChange={handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <input
              className="form-input"
              value={ticketData.lastName}
              name="lastName"
              onChange={handleInputChange}
              type="text"
              placeholder="Last Name"
            />
            <select
              name="service"
              onChange={handleInputChange}
              value={ticketData.service}
              style={{ lineHeight: "2", width: "250px", paddingLeft: "12px" }}
            >
              {services.map((services) => {
                return <option>{services.name}</option>;
              })}
            </select>
            <textarea
              className="form-input w-100"
              value={ticketData.description}
              name="description"
              onChange={handleInputChange}
              type="text"
              placeholder="Notes"
              style={{ lineHeight: "1.5", resize: "vertical" }}
            ></textarea>
            <div>
              <button className="btn btn-lg btn-primary m-1" type="submit">
                Submit
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
