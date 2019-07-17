import React, { Component } from "react";

class Activities extends Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return (
            <div className="main-content">
                <div className="activities-text-wrapper">
                    <h3 className="activities-headline">What We Do</h3>
                    <p className="activities-description">Women Techmakers Frankfurt & Rhine-Main organizes events in the topics of Technology, Leadership, Marketing and Business. Our meetups vary from practical workshops and monthly "Stammtisch" gatherings, to net-working events and conferences. We cater to the areas of interest of our community, pro-viding food, drinks, and the prefect atmo-sphere for learning, networking and fun!</p>
                    {/* add react imgs carrousel */}
                </div>
            </div>
        );
    }
}

export default Activities;
