/* eslint-disable no-unused-vars */
import React from 'react';
import AtWork from '../assets/atwork.jpeg';
import OutWork from '../assets/outside.jpg';

const About = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', // Default to column for smaller screens
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        padding: '2rem',
        color: '#fff',
    };

    const overlayStyle = {
        display: 'flex',
        flexDirection: 'column', // Column for smaller screens
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%', // Ensure it adapts to screen size
        maxWidth: '1200px',
        padding: '2rem',
        borderRadius: '15px',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
    };

    const textSectionStyle = {
        flex: 1,
        marginBottom: '2rem', // Add margin for spacing in column layout
        textAlign: 'center', // Center text for smaller screens
    };

    const headingStyle = {
        fontSize: '2rem', // Adjust for smaller screens
        marginBottom: '1rem',
        color: '#fff',
    };

    const paragraphStyle = {
        fontSize: '1rem', // Adjust font size for better readability
        lineHeight: '1.6',
        color: 'rgb(179 171 171)',
        maxWidth: '500px',
        margin: '0 auto', // Center align text block
    };

    const polaroidContainerStyle = {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        flexWrap: 'wrap', // Allow wrapping for smaller screens
    };

    const polaroidStyle = {
        position: 'relative',
        width: '180px', // Adjust size for responsiveness
        background: '#fff',
        padding: '0.5rem',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        textAlign: 'center',
        transform: 'rotate(-3deg)',
    };

    const polaroidImageStyle = {
        width: '100%',
        borderRadius: '5px',
    };

    const polaroidCaptionStyle = {
        marginTop: '0.5rem',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        color: '#333',
    };

    return (
        <div id='about' style={containerStyle}>
            <div style={overlayStyle}>
                {/* Text Section */}
                <div style={textSectionStyle}>
                <h2>
        About Me<span className="dot">.</span>
      </h2>
                    <p style={paragraphStyle}>
                        I'm a student & <span style={{ color: 'white' }}>self-taught MERN Stack Web Developer</span> from <span style={{ color: 'white' }}>Bangladesh</span>. I wrote my first line of code when I was
                        in <span style={{ color: 'white' }}>6th grade,</span> and since then, I have learned so many things and I'm still walking the walk. I can
                        create websites, web applications, and desktop applications using <span style={{ color: 'white' }}>JavaScript</span>.
                        I strive to <span style={{ color: 'white' }}>resonate positivity & celebrate the beauty</span> of design every day! 🎉
                    </p>
                </div>

                {/* Polaroid Section */}
                <div style={polaroidContainerStyle}>
                    <div style={polaroidStyle}>
                        <img  src={OutWork} alt="Outside Work" style={polaroidImageStyle} />
                        <p style={polaroidCaptionStyle}>Outside Work </p>
                    </div>
                    <div style={{ ...polaroidStyle, transform: 'rotate(3deg)' }}>
                        <img src={AtWork} alt="At Work" style={polaroidImageStyle} />
                        <p style={polaroidCaptionStyle}>At Work</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
