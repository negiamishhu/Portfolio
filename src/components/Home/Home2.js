import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’ve built a solid foundation in programming and enjoy working in
              both the <b className="purple">Python</b> and{" "}
              <b className="purple">JavaScript</b> worlds.
              <br />
              <br />
              I’m fluent in classics like{" "}
              <i>
                <b className="purple">Python</b> and{" "}
                <b className="purple">JavaScript</b>
              </i>{" "}
              and I love applying them to real-world projects.
              <br />
              <br />
              My interests include creating{" "}
              <i>
                <b className="purple">web applications, tools, and products</b>
              </i>{" "}
              — from backend APIs to interactive frontends — and exploring{" "}
              <b className="purple">Data Science</b>.
              <br />
              <br />
              On the backend, I work with{" "}
              <b className="purple">Flask</b> and{" "}
              <b className="purple">Node.js</b>. On the frontend, I enjoy
              building with modern libraries and frameworks like{" "}
              <b className="purple">React.js</b> and{" "}
              <b className="purple">Next.js</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/negiamishhu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amishunegi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
