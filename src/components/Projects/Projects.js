import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify} // Original imgPath
              isBlog={false}
              title="Discord Bot"
              description="A custom Discord bot designed for various interactions and functionalities."
              ghLink="https://github.com/lpenaloza16/discord-bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode} // Original imgPath
              isBlog={false}
              title="Infinity Scroll"
              description="A web application implementing infinite scroll functionality."
              ghLink="https://github.com/lpenaloza16/infinity_scroll"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor} // Original imgPath
              isBlog={false}
              title="Headache Tracker"
              description="An application for tracking and analyzing headache patterns."
              ghLink="https://github.com/lpenaloza16/head_ache_tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf} // Original imgPath
              isBlog={false}
              title="Blog Frontend"
              description="Frontend for a blogging platform, featuring modern web technologies."
              ghLink="https://github.com/lpenaloza16/blogfrontend"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
