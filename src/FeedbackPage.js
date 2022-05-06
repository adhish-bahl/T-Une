import React, {useState} from 'react';
import "./FeedbackPage.css";
import PersonIcon from "./images/personIcon.svg";

function FeedbackPage({userId}) {

    const [message, setMessage] = useState("");
    const [feedback, setFeedback] = useState("");


    const handleSubmit = () => {
        const xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://t-une.000webhostapp.com/feedback.php?userid="+userId+"&comment=" + feedback, false);
        xhttp.onload = function(e) {}
        xhttp.send();
        setMessage("Thank you for your valuable feedback. We'll get back to you soon!");
        setFeedback("");
    }

    

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
                        <textarea name="feedbackArea" id="feedbackArea" placeholder='Feedback Here' required onChange={e => setFeedback(e.target.value)} value={feedback} />
                        <button type="submit" id='submitButton' onClick={handleSubmit}>Submit</button>
                    </div>
                    <div className="messageShow">
                        {message}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedbackPage