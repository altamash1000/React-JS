import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Altamash Asif Ghori </span>
            from <span className="green"> Karachi, Pakistan.</span>
            <br />
            I am currently learning Webdevelopment.
            <br />
            I have completed MSc in Applied Chemistry and have done short courses in Web development too.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "green" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          {/* <footer className="blockquote-footer">Altamash</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
