import React from 'react';

const Skills = () => {
  const skills = ['JavaScript', 'React', 'HTML', 'CSS', 'Node.js', 'Git'];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;