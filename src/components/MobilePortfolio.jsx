import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { mobileProjects } from "../data/data";
import {
  FaMobileAlt,
  FaGithub,
  FaLock,
  FaGraduationCap,
  FaHeartbeat,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import "./MobilePortfolio.css";

const MobilePortfolio = () => {
  const contentRefs = useRef([]);
  const [maxContentHeight, setMaxContentHeight] = useState(0);
  const [galleryIndexes, setGalleryIndexes] = useState(() =>
    mobileProjects.reduce((accumulator, project) => {
      accumulator[project.id] = 0;
      return accumulator;
    }, {})
  );
  const [carouselInterval, setCarouselInterval] = useState(5000);
  const interactionTimeoutRef = useRef(null);
  const categoryIcons = {
    "Educational Technology": FaGraduationCap,
    "Health & Wellness": FaHeartbeat,
    Productivity: FaChartLine,
  };

  useEffect(() => {
    // Measure the tallest slide so carousel height stays consistent on mobile.
    const updateContentHeight = () => {
      const heights = contentRefs.current.map((el) => {
        if (!el) {
          return 0;
        }

        const computed = window.getComputedStyle(el);
        let restoreStyles = null;

        if (computed.display === "none") {
          restoreStyles = {
            position: el.style.position,
            visibility: el.style.visibility,
            display: el.style.display,
          };

          el.style.position = "absolute";
          el.style.visibility = "hidden";
          el.style.display = "block";
        }

        const measured = el.getBoundingClientRect().height;

        if (restoreStyles) {
          el.style.position = restoreStyles.position;
          el.style.visibility = restoreStyles.visibility;
          el.style.display = restoreStyles.display;
        }

        return measured;
      });

      const tallest = heights.length ? Math.max(...heights) : 0;

      if (tallest > 0) {
        setMaxContentHeight((prev) =>
          Math.abs(prev - tallest) > 0.5 ? tallest : prev
        );
      }
    };

    updateContentHeight();
    window.addEventListener("resize", updateContentHeight);

    return () => {
      window.removeEventListener("resize", updateContentHeight);
    };
  }, [mobileProjects.length]);

  const handleGalleryNavigation = (projectId, direction, total) => {
    if (total <= 1) {
      return;
    }

    setGalleryIndexes((previous) => {
      const currentIndex = previous[projectId] ?? 0;
      const nextIndex = (currentIndex + direction + total) % total;
      return {
        ...previous,
        [projectId]: nextIndex,
      };
    });

    setCarouselInterval(null);

    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }

    interactionTimeoutRef.current = setTimeout(() => {
      setCarouselInterval(5000);
      interactionTimeoutRef.current = null;
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section id="mobile-portfolio" className="py-5" style={{ overflowX: 'hidden' }}>
      <Container style={{ overflowX: 'hidden' }}>
        <div className="section-header text-center mb-3">
          <h2 className="display-4 fw-bold">Mobile Projects</h2>
          <p className="lead text-muted">My mobile applications & React Native projects.</p>
        </div>

        {mobileProjects.length > 0 ? (
          <Carousel
            interval={carouselInterval}
            className="mobile-portfolio-slider"
            indicators={true}
            controls={false}
            wrap={true}
            pause={true}
          >
            {mobileProjects.map((project, index) => {
              const CategoryIcon =
                categoryIcons[project.category] || FaMobileAlt;
              const galleryImages =
                project.gallery && project.gallery.length > 0
                  ? project.gallery
                  : [project.image];
              const totalImages = galleryImages.length;
              const activeIndex = galleryIndexes[project.id] ?? 0;
              const currentImage =
                galleryImages[activeIndex % totalImages] ?? galleryImages[0];

              return (
                <Carousel.Item key={project.id}>
                  <Row
                    className="align-items-center h-100"
                    style={{ marginTop: "2rem" }}
                  >
                    <Col lg={7} className="h-100">
                      <div className="mobile-portfolio-image-wrapper">
                        {totalImages > 1 && (
                          <button
                            type="button"
                            className="gallery-nav-button gallery-nav-button--left"
                            onClick={() =>
                              handleGalleryNavigation(project.id, -1, totalImages)
                            }
                            aria-label="Previous mobile screenshot"
                          >
                            <FaChevronLeft />
                          </button>
                        )}
                        <img
                          src={currentImage}
                          alt={project.title}
                          className="mobile-gallery-image"
                        />
                        {totalImages > 1 && (
                          <button
                            type="button"
                            className="gallery-nav-button gallery-nav-button--right"
                            onClick={() =>
                              handleGalleryNavigation(project.id, 1, totalImages)
                            }
                            aria-label="Next mobile screenshot"
                          >
                            <FaChevronRight />
                          </button>
                        )}
                      </div>
                    </Col>
                    <Col lg={5} className="mb-4 h-100">
                      <div
                        className="mobile-portfolio-content"
                        ref={(el) => {
                          contentRefs.current[index] = el;
                        }}
                        style={
                          maxContentHeight
                            ? { minHeight: `${maxContentHeight}px` }
                            : undefined
                        }
                      >
                        <div>
                          <div className="badge-row mb-3">
                            <span className="badge-category">
                              <CategoryIcon
                                className="badge-icon"
                                aria-hidden="true"
                              />
                              {project.category}
                            </span>
                            <span className="badge-status">
                              {project.status}
                            </span>
                          </div>
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
                        <div className="d-flex gap-2 flex-wrap">
                          <a
                            className="btn btn-sm btn-outline-primary"
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub className="me-1" />
                            GitHub (Private)
                          </a>
                          <span className="btn btn-sm btn-outline-secondary disabled">
                            <FaLock className="me-1" />
                            Access on Request
                          </span>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
                );
            })}
          </Carousel>
        ) : (
          <div className="text-center py-5">
            <div className="empty-state">
              <div className="mobile-gallery-placeholder">
                <div className="mobile-gallery-placeholder-screen">
                  <div className="placeholder-content">
                    <FaMobileAlt size={48} className="text-muted mb-3" />
                    <h4 className="text-muted">Mobile Projects Coming Soon</h4>
                    <p className="text-muted">I'm working on some exciting mobile applications. Stay tuned!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default MobilePortfolio;
