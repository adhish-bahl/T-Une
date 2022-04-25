import React from 'react';
import "./Team.css";
import teamImg from "./images/TeamPicture.jpg";

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
                    <div className="intro">I am a self taught web developer and I am more interested in Front-end development. My experties are HTML v5, CSS v3, JavaScript along with ReactJS for front end development. Other then web development, Video Editing also interests me. Also I am coffee addict.
                    </div>
                </div>
                <div className="center">
                    <div className="name">Gayathri S.</div>
                    <div className="intro">“I have no special talent; I am just passionately curious” ~ Albert Einstein. <br />
                        Hi, I am Gayathri. I’d describe myself as a person largely driven by curiosity. Being a student at Christ (Deemed to be University) has provided me the opportunity to come up with this website and provided me an outlet where I along with my team have given direction to our curiosity and shaped our ideas to life. I’ve always envisioned on creating a platform that brings together like minded people and T-Une is just that! 
</div>
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