import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <div className="col-12 col-md-10 mb-5">
                  {/* start of form */}
          {/* <div className="col-12 col-lg-10">
            <div className="card">
              <h4 className="card-header bg-blue text-white p-2">Add to queue</h4>
              <div className="card-body">
                <form>
                  <input
                    className="form-input"
                    placeholder="First Name"
                    name="firstName"
                    type="text"
                  />
                  <input
                    className="form-input"
                    placeholder="Last Name"
                    name="LastName"
                    type="text"
                  />
                  <div className="form-input">
                    <label for="service" class="form-label">Requested Service: </label>
                    <select id="service" class="form-select w-100 m-1">
                      <option selected>  Options...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-input">
                    <label for="description" className="form-label">Notes: </label>
                    <textarea
                      className="form-input w-100"
                      id="desctiption"
                      placeholder="e.g. language request"
                      style={{ lineHeight: '1.5', resize: 'vertical' }}
                    />
                  </div>
                  <div className="row g-3 justify-center">
                    <div className="col-md-6">
                      <button type="submit" className="btn btn-lg btn-info">Submit</button>
                    </div>
                    <div class="col-md-6">
                      <div class="form-check">
                        <input className="form-check-input" type="radio" id="complete" />
                        <label className="form-check-label" for="complete">
                          Complete
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
                  {/* end of form */}
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            Content Here
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
