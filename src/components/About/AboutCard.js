import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Amishu Negi</span>
            {" "}working as an <span className="purple">Associate Software Developer</span>
            {" "}for a product-based startup company.
            <br />
            I’m passionate about building impactful software and exploring new technologies.
            <br />
            My work spans both frontend and backend development, and I love solving real-world problems through code.
            <br />
          </p> 

          <p style={{ color: "rgb(155 126 172)" }}>
            "Credit belongs to the one who makes it happen, not just the one who thought of it."
          </p>
         </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
