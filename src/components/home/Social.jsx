import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer" // It's good practice to include rel="noopener noreferrer" when using target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default Social;
