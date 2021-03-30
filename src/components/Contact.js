import React from "react";

const name = "Princess Zelda";
const avatar = "https://www.nautiljon.com/images/jeuxvideo_persos/00/42/zelda_2824.jpg";
let status = true;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" src={avatar} alt="Princess Zelda" />
      <div>
        <h3 className="name">{name}</h3>
        <div className="status">
          <div className={status ? "status-online" : "status-offline"}></div>
          <p className="status-text">{status ? "Online" : "Offline"}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
