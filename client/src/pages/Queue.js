import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUEUE } from "../utils/queries";
import { Link } from 'react-router-dom';
// import services from  '../utils/services';

const Queue = () => {
  const { data, loading } = useQuery(QUERY_QUEUE);
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
            <Link className="card-header bg-primary text-light p-2 m-0"
            to={`/ticket/${ticket._id}`}>
              {ticket._id} {ticket.service}
              </Link>
          </div>
        ))}
    </div>
  );
};
export default Queue;
