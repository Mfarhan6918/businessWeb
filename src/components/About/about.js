import React from "react";
import "./about.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faChartPie, faTruckFast, faUserClock, faHouseLaptop, faPhone} from "@fortawesome/free-solid-svg-icons";
import AboutImg from '../../assets/about/about_img.jpg';

const About = () => {
  // Mobile icon
  const fabusinesstime = <FontAwesomeIcon icon={faBusinessTime} />;
  const fachartpie = <FontAwesomeIcon icon={faChartPie} />;
  const fatruckfast = <FontAwesomeIcon icon={faTruckFast} />;
  const fauserclock = <FontAwesomeIcon icon={faUserClock} />;
  const fahouselaptop = <FontAwesomeIcon icon={faHouseLaptop} />;
  const faphone = <FontAwesomeIcon icon={faPhone} />;
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="title_heading">
            <h3>We Provides Shortage Remarkable Ideas!</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
              voluptatibus libero sapiente maxime quibusdam.
            </p>
          </div>
          <div className="about_box_wrapper">
            <div className="about_box">
              <div className="about_icon">
                {fabusinesstime}
              </div>
              <div className="about_content">
                <h5>Development</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, 
                  quaerat rerum nostrum totam labore.</p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon green_icon">
                {fachartpie}
              </div>
              <div className="about_content">
                <h5>Integration</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, 
                  quaerat rerum nostrum totam labore.</p>
              </div>
            </div>
            <div className="about_box">
              <div className="about_icon blue_icon">
                {fatruckfast}
              </div>
              <div className="about_content">
                <h5>Branding</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, 
                  quaerat rerum nostrum totam labore.</p>
              </div>
            </div>
          </div>
          <div className="about_box_details">
            <div className="about_col">
              <div className="about_image">
                <img src={AboutImg} alt="About" />
              </div>
              <div className="img_info_box">
                <h6 className="img_info_title">GET A PRICE QUOTE TODAY!</h6>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br /> elit Obcaecati 
                 consectetur minima non?</p>
                <a href="/">{faphone} <span>042-53436577</span></a>
              </div>
            </div>
            
            <div className="about_col more_space">
              <h3>We have business skills  that will increase your earnings</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio error nesciunt 
                voluptatem quae. Accusantium placeat ex amet iste inventore possimus!</p>
                
                <div className="grid_info">
                  <div className="icon">{fauserclock}</div>
                  <div className="detail">
                    <h4>Start your own business in minutes</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Laudantium enim rerum deleniti eius totam quos.</p>
                  </div>
                </div>
                
                <div className="grid_info">
                  <div className="icon green_icon">{fahouselaptop}</div>
                  <div className="detail">
                    <h4>Open a business account online</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      Laudantium enim rerum deleniti eius totam quos.</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
