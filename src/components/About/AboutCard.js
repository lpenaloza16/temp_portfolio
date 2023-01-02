import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My sincere goal is to use my skills and knowledge to create
            educational tools and resources that make a positive impact. My
            focus is on designing products that are intuitive and easy to use,
            while also promoting inclusivity and accessibility. I am dedicated
            to continuously improving my skills and knowledge through ongoing
            learning and professional development in order to create the most
            effective solutions for my users.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
            </li>
            <li className="about-activity">
              <ImPointRight />
            </li>
            <li className="about-activity">
              <ImPointRight />
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
