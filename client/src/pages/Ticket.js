import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { QUERY_TICKET, QUERY_QUEUE } from "../utils/queries";
import { REMOVE_TICKET } from "../utils/mutations";

const Ticket = () => {
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
      <h3>Ticket #: {ticket._id}</h3>
      <h5>
        Full Name: {ticket.firstName} {ticket.lastName}
      </h5>
      <p>Service: {ticket.service}</p>
      <p>Notes: {ticket.description}</p>
      {/* <button
        className="btn btn-lg btn-primary m-1"
        type="submit"
        onSubmit={closeTicket}
      >
        Close Ticket
      </button> */}
      <button
        className="btn btn-lg btn-primary m-1"
        type="button"
        onClick={deleteTicket}
      >
        Delete Ticket
      </button>
    </div>
  );
};

export default Ticket;
