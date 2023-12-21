import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="main-footer">
      <div className="con">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>HIREHOUSE</h4>
            <ul className="list-unstyled">
              <li>HireHouse is an applicant-tracking-system that helps recruiters and HRs in their hiring process</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>CONTACT</h4>
            <ul className="list-unstyled">
              <li>88257-22137</li>
              <li>Coimbatore, TamilNadu</li>
              <li>Arivoli Nagar, Kovaipudur</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>HIREHOUSE</h4>
            <ul className="list-unstyled">
              <li>hirehouse@gmail.com</li>
              <li>hirehouse@yahoo.com</li>
              <li>hirehouse@hotmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} <strong>HireHouse</strong> | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
