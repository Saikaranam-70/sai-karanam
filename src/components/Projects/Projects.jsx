import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/youtube.png";
import emotion from "../../Assets/Projects/chat.png";
import editor from "../../Assets/Projects/e-digital.png";
import chatify from "../../Assets/Projects/red.png";
import suicide from "../../Assets/Projects/gemini.png";
import bitsOfCode from "../../Assets/Projects/clg.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Red Cross Connect"
              description="Built a MERN stack blood donation management site for efficient donor-recipient coordination. Features dynamic state selection, user notifications, and responsive design. Emphasized high-quality visuals, animations, and updated color schemes for an enhanced user experience."
              ghLink="https://github.com/Saikaranam-70/red"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="College Website"
              description="I am developing a MERN stack college website with login functionality for principals, HODs, and students. Each user type can add and manage data, which is displayed dynamically on the site. This project highlights my skills in full-stack development, user authentication, and real-time data management."
              ghLink="https://github.com/Saikaranam-70/collegeWebsiteFrontEnd"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-Digital"
              description="I am developing an e-digital website designed to facilitate communication with customers and showcase our capabilities and projects. The site features an intuitive interface, comprehensive project displays, and interactive communication tools. This project demonstrates my expertise in web development, user engagement, and effective presentation of digital services."
              ghLink="https://github.com/Saikaranam-70/pavancreativehub"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Youtube Clone"
              description="I am developing a YouTube clone that fetches data from APIs to display videos and related information. This project demonstrates my proficiency in integrating APIs to build a dynamic and functional video-sharing platform."
              ghLink="https://github.com/Saikaranam-70/youtube-clone"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Gemini AI Clone"
              description="I am developing a Gemini clone, focusing on replicating core functionalities of the Gemini platform. The project involves integrating key features and ensuring a seamless user experience. This work showcases my skills in building and customizing platforms to meet specific functional requirements.."
              // ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Chat Application"
              description="I am developing a chat application with a Node.js backend, supporting real-time messaging between users. The application features a user list on the opening page with follow functionality for initiating conversations. This project highlights my expertise in real-time communication, backend development, and user interface design."
              // ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
