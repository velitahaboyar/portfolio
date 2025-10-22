import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { personal } from "../data/data";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg={8} className="mx-auto text-center">
            <div className="hero-content">
              <span className="badge text-bg-light mb-4">
                {personal.givenName}
              </span>
              <h1
                className="mb-4 hero-heading"
                style={{
                  fontSize: window.innerWidth < 768 ? "1.5rem" : undefined,
                }}
              >
                Hi, I'm {personal.name}. <br />
                <span
                  className="gradient-text"
                  style={{
                    fontSize: window.innerWidth < 768 ? "1rem" : undefined,
                  }}
                >
                  {personal.title}
                </span>
              </h1>
              <p
                className="lead mb-4 lh-lg text-center text-muted"
                style={{
                  fontSize: window.innerWidth < 768 ? "1rem" : undefined,
                }}
              >
                I'm passionate about creating intelligent and user-focused
                digital experiences.
                <br className="d-none d-sm-block" />
                With my experience in{" "}
                <span className="text-quaternary">React</span>,{" "}
                <span className="text-quaternary">React Native</span>, and modern
                web technologies,
                <br className="d-none d-sm-block" />
                I build{" "}
                <span className="text-white">AI-driven applications</span> and{" "}
                <span className="text-white">automation systems</span> that blend
                beautiful design with real functionality.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a
                  href="/cv/Veli Taha Boyar CV.pdf"
                  className="btn btn-primary"
                  download
                >
                  Download CV
                </a>
                <a className="btn btn-outline-primary" href="#portfolio">
                  My Portfolio
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
