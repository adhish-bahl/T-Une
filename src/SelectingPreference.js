import React from 'react';
import "./SelectingPreference.css";

function SelectingPreference() {
  return (
    <div className='SPContainer'>
        <div className="bigBox">
            <h1 className="headingSP">TELL US YOUR FAVORITE GENRE!</h1>
            <form>
                <span>
                    <input type="checkbox" name="hh" id="hh" />
                    <label htmlFor="hh">Hip-Hop</label>
                </span>
                <span>
                    <input type="checkbox" name="edm" id="edm" />
                    <label htmlFor="edm">EDM</label>
                </span>
                <span>
                    <input type="checkbox" name="bollywood" id="bollywood" />
                    <label htmlFor="bollywood">Bollywood</label>
                </span>
                <span>
                        <input type="checkbox" name="kpop" id="kpop" />
                        <label htmlFor="kpop">K-Pop</label>
                </span>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default SelectingPreference