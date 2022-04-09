import React from 'react';

function PasswordField() {
    return (
        <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password" className="form-control" placeholder="Enter Password" id="inputPassword3"></input>
            </div>
        </div>
    );
}

export default PasswordField;