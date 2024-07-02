import React from 'react'
import './home.css'
import BannerImage from '../../assets/banner/banner-img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChartLine, faShieldHalved, faChartArea } from '@fortawesome/free-solid-svg-icons';

function Home() {
        // Mobile icon
        const fachartline = <FontAwesomeIcon icon={faChartLine} />
        const fashieldhalved = <FontAwesomeIcon icon={faShieldHalved} />
        const fachartarea = <FontAwesomeIcon icon={faChartArea} />
  return (
    <>
    <section id='home'>
        <div className="banner_image"></div>
            <div className="container">
                <div className="banner_outer">
                    <div className="col">
                        <h3 className="title">
                          WE PROMOTE YOUR <span>BUSINESS</span>
                        </h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Laboriosam repellendus soluta alias quasi velit. Doloremque 
                            voluptas tenetur atque quis non?</p>
                        <div className="btn_wrapper">
                            <a href="/" className="btn">Get Started</a>
                        </div>
                    </div>
                    <div className="col">
                        <div className="sub_banner_image">
                            <img src={BannerImage} alt="Banner_image"/>
                        </div>
                         <div className="banner_style_1">
                            {fachartline}
                            <h4>Business Analysis</h4>
                        </div>
                        <div className="banner_style_1 banner_style_2">
                            {fashieldhalved}
                            <h4>99.9% Success</h4>
                        </div>
                        <div className="banner_style_1 banner_style_3">
                            {fachartarea}
                            <h4>Strategy</h4>
                        </div>
                    </div>
                </div>
            </div>
        {/* </div> */}
    </section>
    </>
  )
}

export default Home;