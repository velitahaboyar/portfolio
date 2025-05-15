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
                className="lead mb-4 lh-lg hero-text"
                style={{
                  fontSize: window.innerWidth < 768 ? "1rem" : undefined,
                }}
              >
                I'm passionate about creating beautiful and functional web
                applications, <br className="d-none d-sm-block" /> especially
                modern UI's. <br className="d-none d-sm-block" /> With my
                knowledge of{" "}
                <span className="text-tertiary fw-bold">React</span>,{" "}
                <span className="text-quaternary">Javascript</span>, and modern
                web technologies, <br className="d-none d-sm-block" /> I build
                solutions that make a difference.
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
