import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { projects } from "../data/data";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-5">
      <Container>
        <div className="section-header text-center mb-3">
          <h2 className="display-4 fw-bold">Portfolio</h2>
          <p className="lead text-muted">My projects & works with clients.</p>
        </div>

        <Carousel
          interval={5000}
          className="portfolio-slider"
          indicators={true}
          controls={false}
          wrap={true}
          pause={true}
        >
          {projects.map((project) => (
            <Carousel.Item key={project.id}>
              <Row className="align-items-stretch g-4 pt-2 h-100">
                <Col lg={7} className="h-100">
                  <div className="portfolio-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="portfolio-image"
                    />
                  </div>
                </Col>
                <Col lg={5} className="mb-4 h-100">
                  <div className="portfolio-content">
                    <div>
                      <span className="badge text-bg-light mb-3">
                        {project.category}
                      </span>
                      <h3
                        className="mb-3"
                        style={{
                          fontSize:
                            window.innerWidth < 768 ? "0.75rem" : undefined,
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="lead text-muted"
                        style={{
                          fontSize:
                            window.innerWidth < 768 ? "1rem" : undefined,
                        }}
                      >
                        {project.description}
                      </p>
                    </div>

                    <div className="project-meta mt-2 mb-4">
                      <div className="meta-item">
                        <span
                          className="text-muted"
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "0.75rem" : undefined,
                          }}
                        >
                          Customer
                        </span>
                        <span
                          className="fw-medium text-end"
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "0.75rem" : undefined,
                          }}
                        >
                          {project.client}
                        </span>
                      </div>
                      <div className="meta-item">
                        <span
                          className="text-muted"
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "0.75rem" : undefined,
                          }}
                        >
                          Year
                        </span>
                        <span
                          className="fw-medium text-end"
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "0.75rem" : undefined,
                          }}
                        >
                          {project.year}
                        </span>
                      </div>
                      <div className="meta-item">
                        <span
                          className="text-muted"
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "0.75rem" : undefined,
                          }}
                        >
                          Technologies
                        </span>
                        <span
                          className="fw-medium text-end"
                          style={{
                            fontSize:
                              window.innerWidth < 768 ? "0.75rem" : undefined,
                          }}
                        >
                          {project.technologies}
                        </span>
                      </div>
                    </div>
                    <div>
                      <a
                        className="btn btn-sm btn-outline-primary"
                        href={project.href}
                        target="_blank"
                      >
                        Project Link
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Portfolio;
