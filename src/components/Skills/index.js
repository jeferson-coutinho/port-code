// Skills.js

import React from "react";
import { useEffect, useState } from "react";
import classnames from "classnames";
import "./style.css";
import "../../assets/animate.css/animate.css";

function Skills(props) {
  const { skills } = props;

  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // Atualiza o tamanjo da tela quando a janela é redimensionada
    window.addEventListener("resize", handleResize);

    //Define o tamanho da tela quando o componente é montado
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skillClasses = classnames("skill", {
    "animate__animated animate__fadeInLeft": width >= 576,
  });

  return (
    <React.Fragment>
      <div className="skills">
        {skills.map((skill) => (
          <div key={skill.id} className={skillClasses}>
            <img
              src={skill.src}
              alt={`Logo ${skill.name}`}
              className={`logo ${skill.name}`}
            />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Skills;
