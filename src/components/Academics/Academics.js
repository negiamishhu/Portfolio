import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import "./Academics.css";
import Particle from "../Particle";

const timelineData = [
  {
    type: "internship",
    title: "Associate Software Developer",
    institution: "Security Ltd, Remote",
    duration: "August 2024 - Present",
    status: "Ongoing",
    details: [
  "Led end-to-end development of Capture The Bug's website",
  "Designed and implemented scalable multi-tenant architecture",
  "Developed dynamic scoping form with autosave and real-time validation",
  "Coordinated with cross-functional teams to deliver UI/UX enhancements",
  "Worked on enhancing platform features to improve usability, performance, and user satisfaction",
],

    icon: FaBriefcase,
    iconColor: "#f39c12",
    backgroundColor: "#16213e"
  },
  {
    type: "education",
    title: "Master of Computer Application",
    institution: "Bennett University",
    duration: "Aug 2023 - May 2025",
    status: "Completed",
    details: [
      "Advanced studies in Computer Applications with strong focus on Python programming",
      "Hands-on experience in full-stack web development using modern frameworks",
      "Specialized in Data Science: data analysis, visualization, and machine learning", 
      "Applied Agile methodologies for collaborative software development",
    ],
    icon: FaGraduationCap,
    iconColor: "#c770f0",
    backgroundColor: "#1a1a2e"
  },
  {
    type: "education",
    title: "Bachelor of Science (General)",
    institution: "Chaudhary Charan Singh University",
    duration: "Aug 2020 - Aug 2023",
    status: "Completed",
    details: [
      "Studied core subjects: Physics, Chemistry, and Mathematics",
      "Built a solid foundation in analytical thinking and problem-solving",
      "Developed strong quantitative and research skills through academic projects",
    ],
    icon: FaGraduationCap,
    iconColor: "#3498db",
    backgroundColor: "#0f3460"
  },
];

function Academics() {
  return (
    <div className="academics-container">
      <Particle />
      <h1 className="academics-title">Professional Journey</h1>
      <p className="academics-subtitle">Education & Career Timeline</p>

      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{
              background: item.backgroundColor,
              color: '#fff',
              border: `2px solid ${item.iconColor}`,
              borderRadius: '15px',
              boxShadow: `0 3px 15px rgba(199, 112, 240, 0.3)`
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${item.iconColor}`
            }}
            date={item.duration}
            dateClassName="timeline-date"
            iconStyle={{
              background: item.iconColor,
              color: '#fff',
              boxShadow: `0 0 20px ${item.iconColor}`
            }}
            icon={<item.icon />}
          >
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-institution">{item.institution}</h4>
              <p className="timeline-grade">
                Status: {item.status}
              </p>
              <ul className="timeline-details">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Academics;
