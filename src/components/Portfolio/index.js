// Portfolio.js
import React from "react";
import "./style.css";

function PortfolioList(props) {
  const { projects } = props;

  return (
    <div className="flex portfolio">
      {projects.map((project) => (
        <a
          className="portfolio-item"
          href={project.url}
          key={project.id}
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="portfolio-item-image "
            src={project.imageUrl}
            alt={project.title}
          />
          <h3 className="portfolio-item-title">{project.title}</h3>
          <p className="portfolio-item-description">{project.description}</p>
        </a>
      ))}
    </div>
  );
}

export default PortfolioList;
