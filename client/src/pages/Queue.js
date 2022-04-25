import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_QUEUE } from "../utils/queries";
import { Link } from 'react-router-dom';

const Queue = () => {
  const { data, loading } = useQuery(QUERY_QUEUE);
  const tickets = data?.queue || [];

  if (!tickets.length) {
    return <h3>No Tickets Yet</h3>;
  } 
  console.log(tickets.length)

  var estimatedServiceTime = 10;

  var totalEstimatedTime = tickets.length * estimatedServiceTime
  console.log(totalEstimatedTime);

  var timeIndex = " "
  if (totalEstimatedTime <= 30) {
    timeIndex = "success"
  } else if (totalEstimatedTime <= 50) {
    timeIndex = "warning"
  } else if (totalEstimatedTime > 50) {
    timeIndex = "danger"
  }

  console.log(timeIndex);

  if (loading) {
    return <div>Loading...</div>;
  }

  setTimeout(function () {
    window.location.reload(1);
  }, 10000);

  return (
    <div>
      <h3 className="queueTitle">Queue</h3>
      <h5>Estimated wait time: <span className="text-{timeIndex}">{totalEstimatedTime}</span> minutes</h5>
      {tickets &&
        tickets.map((ticket) => (
          <div className="card mb-3">
            <Link className="card-header queueTickets"
              to={`/ticket/${ticket._id}`}>
              {ticket._id} {ticket.service}
            </Link>
          </div>
        ))}
    </div>
  );
};
export default Queue;
