import React from "react";
import "./portfolio.css";
// import Certificate from './Certificate'
import ProjectImg1 from "../../assets/frontend.png";
import ProjectImg2 from "../../assets/roomBooking.png";
import ProjectImg3 from "../../assets/project.png";

const Portfolio = () => {
  return (
    <div>
      <section class="servicesSection">
        <div class="serviceTitle">
          <h1>MY PROJECTS</h1>
        </div>

        <div class="serviceContents">
          <div class="serviceBox">
            <img src={ProjectImg1} alt="" />
            <h2>Frontend of E-commerce Website</h2>
            <p>
              It is created using HTML, CSS and Javascript. It is responsive and
              attractive front-end of an E-commerce website.
            </p>
          </div>

          <div class="serviceBox">
            <img src={ProjectImg2} alt="" />
            <h2>Room Booking Web Application</h2>
            <p>
              It is created using react.js, node.js, express.js and mongoDB.
            </p>
          </div>

          <div class="serviceBox">
            <img src={ProjectImg3} alt="" />
            <h2>E-commerce Website</h2>
            <p>
              It is created using HTML, CSS, Javascript, Django and SQLite. It
              allows user to sells and buys goods and services over the
              internet.
            </p>
          </div>
        </div>
      </section>
      {/* <Certificate /> */}
    </div>
  );
};

export default Portfolio;
