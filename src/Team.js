import React from 'react';
import "./Team.css";
import teamImg from "./images/FeedbackBG.png";

function Team() {
  return (
    <div className='teamContainer'>
        <div className="upper">
            <img className='teamPicture' src={teamImg} alt="" />
        </div>
        <div className="lower">
            <h1>About Us</h1>
            <div className="information">
                <div className="left">
                    <div className="name">Adhish Bahl</div>
                    <div className="intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam autem, veritatis aspernatur optio provident dolorem molestiae non odio inventore quasi dolorum. Deserunt, voluptatum nam adipisci vitae placeat unde aliquam sint aut ducimus illo deleniti ipsa doloribus corrupti cum numquam eos obcaecati non similique aliquid vel eum minima a perferendis autem!</div>
                </div>
                <div className="center">
                    <div className="name">Gayathri S.</div>
                    <div className="intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam autem, veritatis aspernatur optio provident dolorem molestiae non odio inventore quasi dolorum. Deserunt, voluptatum nam adipisci vitae placeat unde aliquam sint aut ducimus illo deleniti ipsa doloribus corrupti cum numquam eos obcaecati non similique aliquid vel eum minima a perferendis autem!</div>
                </div>
                <div className="right">
                    <div className="name">Anikait M. Nair</div>
                    <div className="intro">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam autem, veritatis aspernatur optio provident dolorem molestiae non odio inventore quasi dolorum. Deserunt, voluptatum nam adipisci vitae placeat unde aliquam sint aut ducimus illo deleniti ipsa doloribus corrupti cum numquam eos obcaecati non similique aliquid vel eum minima a perferendis autem!</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team