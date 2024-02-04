import React from 'react';
import './Footer.css';
import brain from './brain.svg';
import notepad from './notepad.png';
import chat from './chat.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="flex">
        <a href="https://www.cc-seas.columbia.edu/csa" target="_blank">
          <img src={notepad} alt="Columbia Student Advising" width="35" height="35" />
        </a>
        <a href="https://www.health.columbia.edu/content/counseling-and-psychological-services" target="_blank">
          <img src={brain} alt="Counseling and Psychological Services" width="35" height="35" />
        </a>
        <a href="https://988lifeline.org/chat/" target="_blank">
          <img src={chat} alt="988 Lifeline Chat" width="35" height="35" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
