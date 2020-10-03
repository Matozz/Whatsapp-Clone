import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import GitHubIcon from "@material-ui/icons/GitHub";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_contactIcon">
        <a href="" className="footer_contactIcon_youtube">
          <YouTubeIcon />
          <p>Youtube</p>
        </a>
        <a href="" className="footer_contactIcon_instagram">
          <InstagramIcon />
          <p>Instagram</p>
        </a>
        <a href="" className="footer_contactIcon_whatsapp">
          <WhatsAppIcon />
          <p>WhatsApp</p>
        </a>
        <a href="" className="footer_contactIcon_github">
          <GitHubIcon />
          <p>Github</p>
        </a>
      </div>
      <div className="footer_contactInfo">
        <p>A WhatsApp Clone</p>
        <p>©Copyright By Matozz 2020</p>
      </div>
    </div>
  );
}

export default Footer;
