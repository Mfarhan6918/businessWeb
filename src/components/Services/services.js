import React from "react";
import "./services.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
        // Mobile icon
        const falaptopcode = <FontAwesomeIcon icon={faLaptopCode} />
        const fachartbar = <FontAwesomeIcon icon={faChartBar} />
        const facopy = <FontAwesomeIcon icon={faCopy} />
        const famarker = <FontAwesomeIcon icon={faMarker} />
        const fausergear = <FontAwesomeIcon icon={faUserGear} />
        const facoins = <FontAwesomeIcon icon={faCoins} />
  return (
    <>
      <div id="services">
        <div className="container">
          <div className="title_heading">
            <h3>What's Services We Are Offering to Our Customers</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae odit
              quo suscipit zanota kang?
            </p>
          </div>
          <div className="service_wrapper">
            <div className="service_box">
              <div className="service_icon blue_icon">{falaptopcode}</div>
              <h4 className="number">01</h4>
              <div className="service_content">
                <h5>Cloud Computing</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem   
                  voluptas et ullam adipisci porro esse!</p>
                  <a href="" className="read">Read more</a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">{fachartbar}</div>
              <h4 className="number">02</h4>
              <div className="service_content">
                <h5>Business Strategy</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem   
                  voluptas et ullam adipisci porro esse!</p>
                  <a href="" className="read">Read more</a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon green_icon">{facopy}</div>
              <h4 className="number">03</h4>
              <div className="service_content">
                <h5>Report Analysis</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem   
                  voluptas et ullam adipisci porro esse!</p>
                  <a href="" className="read">Read more</a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon">{famarker}</div>
              <h4 className="number">04</h4>
              <div className="service_content">
                <h5>Decision Maker</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem   
                  voluptas et ullam adipisci porro esse!</p>
                  <a href="" className="read">Read more</a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon green_icon">{fausergear}</div>
              <h4 className="number">05</h4>
              <div className="service_content">
                <h5>Customer Oriented</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem   
                  voluptas et ullam adipisci porro esse!</p>
                  <a href="" className="read">Read more</a>
              </div>
            </div>
            <div className="service_box">
              <div className="service_icon blue_icon">{facoins}</div>
              <h4 className="number">06</h4>
              <div className="service_content">
                <h5>Solution Focused</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem   
                  voluptas et ullam adipisci porro esse!</p>
                  <a href="" className="read">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
