// SkillsPage.js

import React from 'react';
import Skills from '../../components/Skills';

function SkillsPage() {
  const skills = [
    { id: 1, name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' },
    { id: 2, name: 'JavaScript', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png' },
    { id: 3, name: 'NodeJS', src: 'https://nodejs.org/static/images/logo.svg' },
    { id: 4, name: 'HTML', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png' },
    { id: 5, name: 'CSS', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png'}
  ];

  return (
    <main>
      <h1>Habilidades</h1>
      <Skills skills={skills} />
    </main>
  );
}

export default SkillsPage;