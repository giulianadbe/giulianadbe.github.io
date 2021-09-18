import React from 'react';

import { EnvelopeFill, Github, Linkedin } from 'react-bootstrap-icons';


const Footer = () => {
  return (
    <div style={{textAlign: 'center'}}>
      <a href="mailto:giulianadbe@gmail.com">
        <EnvelopeFill size={40} alt="Email" className="footer-icon"/>
      </a>
      <a href="https://www.linkedin.com/in/giuliana-de-bellis/">
        <Linkedin size={40} alt="LinkedIn" className="footer-icon"/>
      </a>
      <a href="https://github.com/giulianadbe">
        <Github size={40} alt="GitHub" className="footer-icon"/>
      </a>
    </div>
  );
}

export default Footer;