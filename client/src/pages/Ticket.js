import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_TICKET, QUERY_QUEUE } from "../utils/queries";
import { REMOVE_TICKET } from "../utils/mutations";

import Auth from '../utils/auth';

const Ticket = () => {
// function for user being loggedIn, user will not be able to view ticket details unless they are signed in
  const loggedIn = (event) => {
    event.preventDefault();
    Auth.loggedIn();
  }

  const { ticketId } = useParams();
  const { data } = useQuery(QUERY_TICKET, {
    variables: { ticketId: ticketId },
  });
  const ticket = data?.ticket || [];

  const [removeTicket] = useMutation(REMOVE_TICKET, {
    update(cache, { data: { removeTicket } }) {
      try {
        cache.writeQuery({
          query: QUERY_QUEUE,
          data: { queue: removeTicket },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const deleteTicket = async () => {
    try {
      const { data } = await removeTicket({
        variables: { ticketId },
      });
      window.location.assign("/queue");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <>
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header ticketTitle p-2">Ticket #: {ticket._id}</h4>
          <div className="card-body m-1">
            <h5><span><b>Full Name: </b></span>{ticket.firstName} {ticket.lastName}</h5>
            <h5><span><b>Service:  </b></span>{ticket.service}</h5>
            <h5><span><b>Notes:  </b></span>{ticket.description}</h5>
            <button
              className="btn btn-lg ticketButton m-1"
              type="button"
              onClick={deleteTicket}
            >
              Delete Ticket
            </button>
          </div>
        </div>
      </div>
      </>
      ) : (
        <>
        <p>You need to be logged in to view submitted tickets</p>
        </>
    )}
 
    </div>
  );
};

export default Ticket;
