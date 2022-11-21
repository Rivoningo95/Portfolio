import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Evidence Chauke </span>
            from <span className="purple"> Gauteng, South Africa.</span>
            <br />I am a full stack developer, worked at The Digital Academy for the past 6 month
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listen to Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Future looks bright, and bright indeed because I am born to succeed!"{" "}
          </p>
          <footer className="blockquote-footer">Evidence</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
