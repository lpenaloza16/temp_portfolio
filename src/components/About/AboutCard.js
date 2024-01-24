import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Dedicated to leveraging skills and knowledge to develop educational
            tools and resources that positively impact users. Emphasis is placed
            on creating intuitive, accessible, and inclusive products. Committed
            to ongoing learning and professional development for delivering
            effective solutions.
            <br />
            <br />
            Enjoy engaging in various activities outside of work.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {/* Activity 1 */}
            </li>
            <li className="about-activity">
              <ImPointRight /> {/* Activity 2 */}
            </li>
            <li className="about-activity">
              <ImPointRight /> {/* Activity 3 */}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Leo Peña</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
