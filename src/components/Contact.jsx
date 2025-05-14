import { Container, Row, Col } from "react-bootstrap";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { contact } from "../data/data";
import "./Contact.css";

const iconMap = {
  email: <FaEnvelope size={32} className="mb-3" />,
  linkedin: <FaLinkedin size={32} className="mb-3" />,
  github: <FaGithub size={32} className="mb-3" />,
  instagram: <FaInstagram size={32} className="mb-3" />,
};

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container className="mb-5">
        <div className="section-header text-center mb-5">
          <h2 className="display-5 fw-bold mb-2">Contact Me</h2>
          <p className="text-muted">
            You can use the following channels to contact me.
          </p>
        </div>
        <Row className="justify-content-center g-4">
          {contact.map((item, index) => (
            <Col xs={12} md={6} lg={4} key={index}>
              <div className="contact-card text-center p-4 h-100">
                <a
                  href={item.link}
                  className="text-decoration-none text-light d-block"
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <div className="icon">{iconMap[item.icon]}</div>
                  <h5 className="fw-bold">{item.label}</h5>
                  <p className="mb-0 small">{item.value}</p>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
