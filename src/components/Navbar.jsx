// import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
// import "./Navbar.css";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { useState } from "react";

// const Navbar = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleNavClick = (e, href) => {
//     if (href === "#") {
//       e.preventDefault();
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//     setExpanded(false);
//   };

//   return (
//     <BsNavbar
//       expand="lg"
//       fixed="top"
//       className="navbar"
//       expanded={expanded}
//       onToggle={(value) => setExpanded(value)}
//     >
//       <Container>
//         <BsNavbar.Toggle
//           aria-controls="basic-navbar-nav"
//           className="custom-toggler"
//         />
//         <BsNavbar.Collapse id="basic-navbar-nav">
//           <Nav className="d-flex justify-content-center container-fluid gap-5 flex-wrap">
//             <Nav.Link
//               href="#"
//               className="nav-link-custom"
//               onClick={(e) => handleNavClick(e, "#")}
//             >
//               Summary
//             </Nav.Link>
//             <Nav.Link
//               href="#skills"
//               className="nav-link-custom"
//               onClick={(e) => handleNavClick(e, "#skills")}
//             >
//               Skills
//             </Nav.Link>
//             <Nav.Link
//               href="#portfolio"
//               className="nav-link-custom"
//               onClick={(e) => handleNavClick(e, "#portfolio")}
//             >
//               Portfolio
//             </Nav.Link>
//             <Nav.Link
//               href="#contact"
//               className="nav-link-custom"
//               onClick={(e) => handleNavClick(e, "#contact")}
//             >
//               Contact Me
//             </Nav.Link>
//           </Nav>
//           <Nav className="d-flex justify-content-end align-items-center social-icons">
//             <Nav.Link
//               href="https://www.linkedin.com/in/velitahaboyar/"
//               target="_blank"
//               className="navicon-custom"
//             >
//               <FaLinkedin size={24} color="#5ab8e8" />
//             </Nav.Link>
//             <Nav.Link
//               href="https://www.github.com/velitahaboyar/"
//               target="_blank"
//               className="navicon-custom"
//             >
//               <FaGithub size={24} color="#828b8f" />
//             </Nav.Link>
//           </Nav>
//         </BsNavbar.Collapse>
//       </Container>
//     </BsNavbar>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Navbar as BsNavbar, Nav, Container } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleNavClick = (e, href) => {
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setExpanded(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (window.innerWidth < 768) {
        if (currentY > lastScrollY && currentY > 50) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <BsNavbar
      expand="lg"
      fixed="top"
      className={`navbar ${visible ? "nav-visible" : "nav-hidden"}`}
      expanded={expanded}
      onToggle={(v) => setExpanded(v)}
    >
      <Container>
        <BsNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <BsNavbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-center container-fluid gap-5 flex-wrap">
            {[
              ["#", "Summary"],
              ["#skills", "Skills"],
              ["#portfolio", "Portfolio"],
              ["#mobile-portfolio", "Mobile Apps"],
              ["#contact", "Contact Me"],
            ].map(([href, label]) => (
              <Nav.Link
                key={href}
                href={href}
                className="nav-link-custom"
                onClick={(e) => handleNavClick(e, href)}
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="d-flex justify-content-end align-items-center social-icons">
            <Nav.Link
              href="https://www.linkedin.com/in/velitahaboyar/"
              target="_blank"
              className="navicon-custom"
            >
              <FaLinkedin size={24} color="#5ab8e8" />
            </Nav.Link>
            <Nav.Link
              href="https://www.github.com/velitahaboyar/"
              target="_blank"
              className="navicon-custom"
            >
              <FaGithub size={24} color="#828b8f" />
            </Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;
