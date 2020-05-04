import React from 'react';
import gitLogo from '../assets/git.svg';

const Footer = () => {
  return (
    <footer class="footer mt-auto py-1 navbar-fixed-bottom ">
      <div class="container d-flex flex-column justify-content-center align-items-center ">
        <span class="">Designed & Developed by Abhijeet Singh</span>
        <a href="https://github.com/abhijeetsingh-22" target="_blank">
          {/* <img
            src={gitLogo}
            alt=""
            srcset=""
            height="auto"
            className="footer-icon"
          /> */}
          <i class="fab fa-github fa-lg"></i>
        </a>
      </div>
    </footer>
  );
};
export default Footer;
