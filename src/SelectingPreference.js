import React, { useState } from 'react';
import "./SelectingPreference.css";

function SelectingPreference({email}) {

    var [hh, setHH] = useState(false);
    var [edm, setEDM] = useState(false);
    var [boll, setBoll] = useState(false);
    var [kpop, setKpop] = useState(false);
    const [eMessage, setEMessage] = useState("");
    var [btnDisplay, setBtnDisplay] = useState(false);

    const handleSelection = () => {
        if(hh && edm && boll && kpop) {
            setEMessage("You can not select all 4 categories. Select 3 categories only.");
            setBtnDisplay(true);
        } else {
            setBtnDisplay(false);
            setEMessage(" ");
        }
    }

    const handleHH = () => {
        setHH(hh = !hh);
        console.log(hh);
        handleSelection();
    }
    const handleEDM = () => {
        setEDM(edm = !edm);
        handleSelection();
        console.log(edm);
    }
    const handleBoll = () => {
        setBoll(boll = !boll);
        handleSelection();
        console.log(boll);
    }
    const handleKpop = () => {
        setKpop(kpop = !kpop);
        handleSelection();
        console.log(kpop);
    }

    return (
        <div className='SPContainer'>
            <div className="bigBox">
                <h1 className="headingSP">TELL US YOUR FAVORITE GENRE!</h1>
                <form>
                    <span>
                        <input type="checkbox" name="hh" id="hh" onClick={handleHH} />
                        <label htmlFor="hh">Hip-Hop</label>
                    </span>
                    <span>
                        <input type="checkbox" name="edm" id="edm" onClick={handleEDM} />
                        <label htmlFor="edm">EDM</label>
                    </span>
                    <span>
                        <input type="checkbox" name="bollywood" id="bollywood" onClick={handleBoll} />
                        <label htmlFor="bollywood">Bollywood</label>
                    </span>
                    <span>
                            <input type="checkbox" name="kpop" id="kpop" onClick={handleKpop} />
                            <label htmlFor="kpop">K-Pop</label>
                    </span>
                    <button  disabled={btnDisplay} type="submit">Submit</button>
                </form>
                <span className="errorMessage">{eMessage}</span>
            </div>
        </div>
    )
}

export default SelectingPreference