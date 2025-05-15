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
              <Row className="align-items-stretch g-4 pt-3">
                <Col lg={7}>
                  <div className="portfolio-image-wrapper">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="portfolio-image"
                    />
                  </div>
                </Col>
                <Col lg={5}>
                  <div className="portfolio-content">
                    <div>
                      <span className="badge text-bg-light mb-3">
                        {project.category}
                      </span>
                      <h3 className="mb-3">{project.title}</h3>
                      <p className="lead text-muted">{project.description}</p>
                    </div>

                    <div className="project-meta mt-2 mb-3">
                      <div className="meta-item">
                        <span className="text-muted">Customer</span>
                        <span className="fw-medium">{project.client}</span>
                      </div>
                      <div className="meta-item">
                        <span className="text-muted">Year</span>
                        <span className="fw-medium">{project.year}</span>
                      </div>
                      <div className="meta-item">
                        <span className="text-muted">Technologies</span>
                        <span className="fw-medium">
                          {project.technologies}
                        </span>
                      </div>
                    </div>
                    <div>
                      <a className="btn btn-sm btn-outline-primary" href={project.href} target="_blank">
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
