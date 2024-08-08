// import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import chroma from 'chroma-js';
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">SAI MANIKANTA KARANAM </span>
            from <span className="purple"> Visakhapatnam, India.</span>
            <br />
            <br />
            I am Student studying Diploma Final Year 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning New Skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          It is not a bug it is an undocumented feature {" "}
          </p>
          <footer className="blockquote-footer">Sai</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
