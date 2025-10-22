import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { skills } from "../data/data";
import { FaReact, FaJsSquare, FaBootstrap, FaLinux } from "react-icons/fa";
import { FaCss3, FaGit, FaHtml5 } from "react-icons/fa6";
import { SiTailwindcss, SiTypescript, SiReact } from "react-icons/si";

const iconMap = {
  react: <FaReact size={40} color="#61DBFB" />,
  "react-native": <SiReact size={40} color="#61DBFB" />,
  javascript: <FaJsSquare size={40} color="#F7DF1E" />,
  bootstrap: <FaBootstrap size={40} color="#7952B3" />,
  html: <FaHtml5 size={40} color="#e34c26" />,
  css: <FaCss3 size={40} color="#2965f1" />,
  git: <FaGit size={40} color="#F1502F" />,
  tailwind: <SiTailwindcss size={40} color="#27aae3" />,
  nativewind: <SiTailwindcss size={40} color="#06B6D4" />,
  linux: <FaLinux size={40} color="#828b8f" />,
  
};



const Skills = () => {
  return (
    <section id="skills">
      <Container>
        <div className="section-header text-center mb-5">
          <h2>Skills</h2>
          <p className="lead">
            I'm currently learning and writing with these technologies:
          </p>
        </div>
        <Row className="g-4">
          {skills.map((skill, index) => (
            <Col md={6} xs={6} lg={4} key={index}>
              <div className="skills-card text-center p-4 rounded h-100">
                <div className="mb-3">{iconMap[skill.icon]}</div>
                <h5 className="h6">{skill.title}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
