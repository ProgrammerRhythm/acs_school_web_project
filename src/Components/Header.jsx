/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Style.css';

const Header = () => {
    return (
        <div className="container">
          <div  className='Header '>
            <h1  className='HelloW animate__animated animate__wobble'>Hello World!</h1>
            <h3 className='Sintro animate__animated animate__flash animate__delay-.5s'>This is Rhythm Munshi</h3>
            <TypingAnimation></TypingAnimation>
            <ShortIntro></ShortIntro>
        </div>
        </div>
    );
};



const TypingAnimation = () => {
    const words = ["Student", "Developer", "Learner"];
    const typingSpeed = 100; // Speed of typing in milliseconds
    const erasingSpeed = 50; // Speed of erasing in milliseconds
    const delayBetweenWords = 1500; // Delay before switching to the next word
  
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const currentWord = words[wordIndex];
      let typingTimeout;
  
      if (isDeleting) {
        // Erasing characters
        typingTimeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        }, erasingSpeed);
      } else {
        // Typing characters
        typingTimeout = setTimeout(() => {
          setText(currentWord.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      }
  
      // When typing is complete
      if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
  
      // When erasing is complete
      if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
  
      return () => clearTimeout(typingTimeout);
    }, [charIndex, isDeleting, wordIndex]);
  
    return (
      <div className="profession">
        <div className="static-text">A</div>
        <div className="dynamic-text">{text}</div>
        <span className="caret"></span>
      </div>
    );
  };
  


  
  const ShortIntro = () => {
    const phrases = ["\"Welcome To\"", "\"My Personal\"", "\"Portfolio\"", "\"Website\""];
    const [text, setText] = useState("");
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const typeEffect = () => {
        const currentPhrase = phrases[currentPhraseIndex];
        
        if (isDeleting) {
          setText(currentPhrase.substring(0, currentCharIndex - 1));
          setCurrentCharIndex((prev) => prev - 1);
  
          if (currentCharIndex === 0) {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        } else {
          setText(currentPhrase.substring(0, currentCharIndex + 1));
          setCurrentCharIndex((prev) => prev + 1);
  
          if (currentCharIndex === currentPhrase.length) {
            setIsDeleting(true);
          }
        }
      };
  
      const typingSpeed = isDeleting ? 50 : 100;
      const timeout = setTimeout(typeEffect, currentCharIndex === 0 || currentCharIndex === phrases[currentPhraseIndex].length ? 1000 : typingSpeed);
  
      return () => clearTimeout(timeout);
    }, [currentCharIndex, isDeleting, phrases, currentPhraseIndex]);
  
    return (
      <div className="code__editor">
        <div className="editor__icons">
          <div className="icon red"></div>
          <div className="icon yellow"></div>
          <div className="icon green"></div>
        </div>
        <div style={{textAlign:'start'}} className="editor__body">
          <div className="code_header">
            <span className="code_sym">#include <span className="code_str">&lt;stdio.h&gt;</span></span>
          </div>
  
          <p>
            <span className="code_sym">int </span>
            <span className="code_func">main</span>(<span className="code_sym"> int </span>
            <span className="code_arg">argc </span>,
            <span className="code_sym">char const * </span><span className="code_arg">argv </span>
            <span className="code_sym">[]</span>) {"{"}
          </p>
          <div className="code__body">
            <div className="welcome__text">
              <span className="code_func">printf</span>(
              <span className="dynamic-text">{text}</span>
              <span className="cursor"></span>);
            </div>
            <p>
              <span className="code_sym">return </span>
              <span className="code_num">0</span>;
            </p>
          </div>
          <p>{"}"}</p>
        </div>
      </div>
    );
  };
  

  

export default Header;