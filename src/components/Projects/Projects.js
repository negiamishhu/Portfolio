import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle"; 
import teamFeedbackPortalImg from "../../Assets/Projects/teamFeedbackPortalImg.webp"; 
import skinDiseaseFusionImg from "../../Assets/Projects/skinDiseaseFusionImg.jpg";
import stockPriceAnalysisImg from "../../Assets/Projects/stockPriceAnalysisImg.avif";  
import blinkitSalesAnalysisImg from "../../Assets/Projects/blinkitSalesAnalysisImg.jpg";  
import foodOrderingHomeImg from "../../Assets/Projects/foodOrderingHomeImg.jpg"; 

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={teamFeedbackPortalImg}
    isBlog={false}
    title="Team Feedback Portal"
    description="Developed a role-based feedback management system enabling managers to give structured feedback to employees with sentiment tracking. Built using React, Flask, and SQLite, featuring secure authentication, interactive dashboards, and Dockerized deployment for easy setup."
    ghLink="https://github.com/negiamishhu/Team-Feedback-Portal"
  />
</Col>


          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={skinDiseaseFusionImg}
    isBlog={false}
    title="DL-ML Fusion for Skin Disease Detection"
    description="Implemented hybrid models that leverage deep learning (MobileNet, VGG-16) for feature extraction combined with classic machine learning classifiers (Random Forest, XGBoost) to enhance class-wise detection performance on skin lesion images. Built with Jupyter notebooks and trained using a publicly available dermatology dataset."
    ghLink="https://github.com/negiamishhu/DL-and-ML-fusion-for-skin-disease-detection"
  />
</Col>


         <Col md={4} className="project-card">
  <ProjectCard
    imgPath={foodOrderingHomeImg}
    isBlog={false}
    title="Food Ordering – React Homepage"
    description="Designed a responsive React-based homepage for a food ordering app. Features include dynamic menu display, intuitive category navigation, item cards with images and descriptions, and a functional search bar for quick browsing."
    ghLink="https://github.com/negiamishhu/food-ordering"
  />
</Col> 

<Col md={4} className="project-card">
  <ProjectCard
    imgPath={stockPriceAnalysisImg}
    isBlog={false}
    title="Stock Price Analysis Tool"
    description="Built a Python-based stock analysis utility using Pandas, Matplotlib, and Plotly for data loading, exploration, and dynamic visualization. Includes functionality to compute and graph Simple Moving Averages (SMAs) across custom time windows for trend analysis."
    ghLink="https://github.com/negiamishhu/Stock-Price-Analysis-Tool"
  />
</Col>

 

          <Col md={4} className="project-card">
  <ProjectCard
    imgPath={blinkitSalesAnalysisImg}
    isBlog={false}
    title="Blinkit Sales Data Analysis"
    description="Developed an interactive Power BI dashboard to analyze Blinkit’s sales and customer behavior. Crafted dynamic metrics and visualizations with slicers for fat-content, outlet type, size, location, and establishment year. Tools: Power BI Desktop, DAX + Excel dataset."
    ghLink="https://github.com/negiamishhu/-Blinkit-Sales-Data-Analysis-"
  />
</Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
