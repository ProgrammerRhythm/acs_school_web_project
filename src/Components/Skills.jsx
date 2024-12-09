/* eslint-disable no-unused-vars */
import React from 'react';
import './Style.css';

const skills = [
  { name: 'HTML', icon: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png' },
  { name: 'CSS', icon: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png' },
  { name: 'JavaScript', icon: 'https://media.graphassets.com/auto_image/compress/cache=expiry:max/resize=width:828/eLT1amjQTNS9DfweODjZ' },
  { name: 'Python', icon: 'https://i.pinimg.com/originals/f7/a4/83/f7a483ddf1a71154bfc8eee6eb20ec02.png' },
  { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png' },
  { name: 'React', icon: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg' },
  { name: 'MongoDB', icon: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
  { name: 'Express.js', icon: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png' },
  { name: 'FireBase', icon: 'https://cdn.icon-icons.com/icons2/691/PNG/512/google_firebase_icon-icons.com_61474.png' },
  { name: 'Tailwind CSS', icon: 'https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png' },
  { name: 'Webflow', icon: 'https://www.svgrepo.com/show/331642/webflow.svg' },
];

const Skills = () => {
  return (
    <section id='skills' className="skill-stack">
      <h2>
        Skill Stack<span className="dot">.</span>
      </h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <img src={skill.icon} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
