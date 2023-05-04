import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container id="about">
      <Row>
        <Col md={8} className="home-about-description">
          <h1 style={{ fontSize: "2.6em" }}>
            MORE <span className="purple"> ABOUT </span> ME
          </h1>
          <p>
            Skilled in software and web application development using
            technologies such as React and JavaScript. Experienced in creating
            educational games and tools, with a focus on cross-platform
            development. Responsibilities include designing, building, testing,
            and debugging software. Actively exploring new technologies,
            including machine learning engineering, to enhance proficiency.
            Aiming to create user-friendly and easy-to-understand web-based
            products.
          </p>
        </Col>
        <Col md={4} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
    </Container>
  );
}
export default Home2;
