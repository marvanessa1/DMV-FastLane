import React, {useState} from 'react';
// import { Navigate, useParams } from 'react-router-dom';
// import { useMutation } from '@apollo/client';

// import Auth from '../utils/auth';
import { GET_QUEUE } from '../utils/queries';

const Queue= () => {
    const { loading, data } = useQuery(GET_QUEUE, {
        variables: { ticketId, service },
      });

      const user = data?.me || data?.user || {};

      return (
          <div>
              <h3>Queue</h3>
              <h5>Estimated wait time: </h5>
              {thoughts &&
        tickets.map((ticket) => (
          <div key={ticket._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {ticket.ticketId} <br />
              <span style={{ fontSize: '1rem' }}>
                had this thought on {ticket.service}
              </span>
            </h4>
          </div>
        ))}
        </div>
      );
};