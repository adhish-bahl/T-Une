import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import "./Footer.css";

function Footer() {

  const history = useHistory();

  return (
    <div className='footer'>
      <div className="otherLinks">
        <div className="sec">
          <p className="feedback">Have any feedback for us? </p> 
          <Link to="/feedback" className="Link" >
            Give Feedback
          </Link>
        </div>
        <div className="sec">
          <p className="meetTeam">Want to meet our team?</p>
          <Link to="/ourteam" className="Link" >
            Meet Team
          </Link>
        </div>
      </div>
        <p className="mainText">T-Une, the T-Une logo and logotype are either a registered trademark or a trademark of T-Une, Inc. in the India and/or other countries. © 2022-present. T-Une, Inc. All rights reserved.</p>
    </div>)
}

export default Footer;
