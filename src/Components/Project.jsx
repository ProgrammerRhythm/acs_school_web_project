/* eslint-disable no-unused-vars */
import React from 'react';
import './Style.css';
import projectOne from '../assets/project-1.png'
import projectTwo from '../assets/project-2.png'
import projecttH from '../assets/project-3.png'
import projectFour from '../assets/project-4.png'

const Project = () => {
    return (
        <section id="project" className="project-section">
            <h2 style={{textAlign: 'center'}}>
        Projects<span className="dot">.</span>
      </h2>
            <div className="project-row">
                {/* Project 1 */}
                <div className="project-card">
                    <img
                        src={projectOne}
                        alt="Project 1"
                        className="project-image"
                    />
                    <div className="project-content">
                        <span className="project-tag blue">● Work</span>
                        <span className="project-tag">Chrome Extention</span>
                        <h2 className="project-title">ProTab</h2>
                        <p className="project-description">
                            ProTab is a browser extension that helps you to stay focused on workflow and increase your productivity levels. This extension is made especially for students and programmers to stay more focused and productive in their workflow.
                        </p>
                        <a href="https://github.com/ProCodify/ProTab" className="read-more">Read more →</a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card">
                    <img
                        src={projectTwo}
                        alt="Project 2"
                        className="project-image"
                    />
                    <div className="project-content">
                        <span className="project-tag blue">● Work</span>
                        <span className="project-tag">Ed Tech</span>
                        <h2 className="project-title">
                        Eshikha
                        </h2>
                        <p className="project-description">
                        Eshikha is a Learning platfrom which allows students to learn at their own pace, test themselves and get ahead with our expert teachers anytime and anywhere.
                        </p>
                        <a href="https://github.com/ProgrammerRhythm/Eshikah" className="read-more">Read more →</a>
                    </div>
                </div>
            </div>
            <div className="project-row">
                {/* Project 1 */}
                <div className="project-card">
                    <img
                        src={projecttH}
                        alt="Project 1"
                        className="project-image"
                    />
                    <div className="project-content">
                        <span className="project-tag blue">● Work</span>
                        <span className="project-tag">Music</span>
                        <h2 className="project-title">Hard_Rock </h2>
                        <p className="project-description">
                        If you searching for lyrics this is one of the best website
                        </p>
                        <a href="https://github.com/ProgrammerRhythm/Hard_Rock" className="read-more">Read more →</a>
                    </div>
                </div>

                {/* Project 2 */}
                <div className="project-card">
                    <img
                        src={projectFour}
                        alt="Project 2"
                        className="project-image"
                    />
                    <div className="project-content">
                        <span className="project-tag blue">● Work</span>
                        <span className="project-tag">MVP Application</span>
                        <h2 className="project-title">
                            Next Global Tech
                        </h2>
                        <p className="project-description">
                        NextGlobalTech, where we turn your groundbreaking ideas into reality at lightning speed. Our experienced team specializes in delivering top-notch Minimum Viable Products (MVPs) within just 6 weeks. 
                        </p>
                        <a href="https://www.nextglobaltech.com/" className="read-more">Read more →</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
