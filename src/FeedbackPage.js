import React from 'react';
import "./FeedbackPage.css";
import PersonIcon from "./images/personIcon.svg";

function FeedbackPage() {
  return (
    <div className='feedbackContainer'>
        <div className="centerContainer">
            <div className="heading">
                Let us know what you think!
            </div>
            <div className="feedbackPara">
                {/* <div className="top">
                    <img className='personicon' src={PersonIcon} alt="PersonIcon" />
                    <input type="text" name="username" id="username" placeholder='username' />
                </div> */}
                <div className="bottom">
                    <textarea name="feedbackArea" id="feedbackArea" placeholder='Feedback Here' />
                    <button type="submit" id='submitButton'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeedbackPage