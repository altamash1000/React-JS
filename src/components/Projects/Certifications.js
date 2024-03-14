import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import dolat from "../../Assets/Projects/dolat.PNG";
import ktw from "../../Assets/Projects/ktw.PNG";
import medi from "../../Assets/Projects/medi.PNG";
import write from "../../Assets/Projects/write.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dolat}
              isBlog={false}
              title="Dolat e Pakistan"
              description="A site for currency in Pakistan"
              ghLink="https://github.com/altamash1000/Projects-FrontEnd/tree/main/Dolat%20e%20Pakistan"
              demoLink="https://myprojectaltamash10000.on.drv.tw/Dolat%20e%20Pakistan/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={write}
              isBlog={false}
              title="Write Era"
              description="A site for Writing methods"
              ghLink="https://github.com/altamash1000/Projects-FrontEnd/tree/main/Write%20Era"
              demoLink="https://myprojectaltamash10000.on.drv.tw/Write%20Era/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ktw}
              isBlog={false}
              title="Karo Trade Wise"
              description="A site for Buy and sell items"
              ghLink="https://github.com/altamash1000/Projects-FrontEnd/tree/main/KaroTradeWise"
              demoLink="https://myprojectaltamash10000.on.drv.tw/KaroTradeWise/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medi}
              isBlog={false}
              title="Meditation Mystery"
              description="A site for meditation tips"
              ghLink="https://github.com/altamash1000/Projects-FrontEnd/tree/main/Meditation%20Mastery"
              demoLink="https://myprojectaltamash10000.on.drv.tw/Meditation%20Mastery/examples/jquery-adapter.html.crswap"
            />
          </Col>
          
          
          
          
          
          
          
          
          
          
          
          

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
