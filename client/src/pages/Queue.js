import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUEUE } from "../utils/queries";

const Queue = () => {
  const { data } = useQuery(QUERY_QUEUE);
  const tickets = data?.ticket ||{};

  if (!tickets.length) {
    return <h3>No Tickets Yet</h3>;
  }

  return (
    <div>
      <h3>Queue</h3>
      <h5>Estimated wait time: </h5>
      {tickets &&
        tickets.map((ticket) => (
          <div key={ticket._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {ticket.ticketId} <br />
              <span style={{ fontSize: "1rem" }}>
                {ticket.service}
              </span>
            </h4>
          </div>
        ))}
    </div>
  );
};
export default Queue;
