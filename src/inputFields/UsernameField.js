import React from 'react';

function UsernameField() {
    return (
        <div className="row mb-3">
            <label htmlFor="inputUsername3" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
                <input type="Username" className="form-control" placeholder="Enter Username" id="inputUsername3"></input>
            </div>
        </div>

    );
}

export default UsernameField;