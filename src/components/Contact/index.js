// Contact.js

import React from "react";
import { ReactComponent as MapPin } from "../../assets/svg/map-pin.svg";
import { ReactComponent as Briefcase } from "../../assets/svg/briefcase.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Linkedin } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
import { ReactComponent as Globe } from "../../assets/svg/globe.svg";
import { ReactComponent as Phone } from "../../assets/svg/globe.svg";
import { ReactComponent as Email } from "../../assets/svg/mail.svg";
import "./style.css";

function Contact() {
  return (
    <div id="links">
      <div className="box">
        <MapPin className="svg" />
        <p>Rio de Janeiro / RJ - Brasil</p>
      </div>
      <div className="box">
        <Briefcase className="svg" />
        <p>Desempregado</p>
      </div>
      <div className="box">
        <Github className="svg" />
        <a
          href="https://github.com/jeferson-coutinho"
          target="_blank"
          rel="noreferrer"
        >
          jeferson-coutinho
        </a>
      </div>
      <div className="box">
        <Linkedin className="svg" />
        <a
          href="https://www.linkedin.com/in/jeferson-coutinho/"
          target="_blank"
          rel="noreferrer"
        >
          jeferson-coutinho
        </a>
      </div>
      <div className="box">
        <Twitter className="svg" />
        <a
          href="https://twitter.com/jeferson_so"
          target="_blank"
          rel="noreferrer"
        >
          jeferson_so
        </a>
      </div>
      <div className="box">
        <Globe className="svg" />
        <a
          href="https://jeferson-coutinho.github.io/contact"
          target="_blank"
          rel="noreferrer"
        >
          jeferson_sousa.github.io/port
        </a>
      </div>
      <div className="box">
        <Phone />
        <a
          href="https://api.whatsapp.com/send?phone=5521974027499&text=Olá,%20gostaria%20de%20entrar%20em%20contato!"
          target="_blank"
          rel="noreferrer"
        >
          (21) 97402-7499
        </a>
      </div>
      <div className="box">
        <Email className="svg" />
        <a href="mailto:jeferson_sousa@yahoo.com.br">
          jeferson_sousa@yahoo.com.br
        </a>
      </div>
    </div>
  );
}

export default Contact;
