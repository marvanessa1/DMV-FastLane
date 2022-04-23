import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUEUE } from "../utils/queries";

const Queue = () => {
  const { loading, data } = useQuery(QUERY_QUEUE);
  const tickets = data?.queue || [];

  if (!tickets.length) {
    return <h3>No Tickets Yet</h3>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Queue</h3>
      <h5>Estimated wait time:</h5>
      {tickets &&
        tickets.map((ticket) => (
          <div className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {ticket._id} <br />
              <span style={{ fontSize: "1rem" }}>
                {ticket.lastName}
              </span>
            </h4>
          </div>
        ))}
    </div>
  );
};
export default Queue;
