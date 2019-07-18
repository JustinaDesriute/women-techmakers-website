import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import byob from "../../assets/byob.jpeg";
import stm from "../../assets/stammtisch.jpeg";
import gdd from "../../assets/gooddata.jpeg";


class Activities extends Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return (
            <div className="main-content-vertical">
                <div className="text-wrapper">
                    <h3 className="headline">What We Do</h3>
                    <p className="description">Women Techmakers Frankfurt & Rhine-Main organizes events in the topics of Technology, Leadership, Marketing and Business. Our meetups vary from practical workshops and monthly "Stammtisch" gatherings, to net-working events and conferences. We cater to the areas of interest of our community, pro-viding food, drinks, and the prefect atmo-sphere for learning, networking and fun!</p>
                </div>
                    <Carousel height="50%" width="50%">
                        <div>
                            <img src={byob} alt="logo" />
                            {/* <p className="legend">logo</p> */}
                        </div>
                        <div>
                            <img src={stm} alt="logo" />
                        </div>
                        <div>
                            <img src={gdd} alt="logo" />
                        </div>
                    </Carousel>
            </div>
        );
    }
}

export default Activities;
