import React from "react";
import locationPin from '../images/location-pin-icon.png'

export default function Entry(entry){
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = entry;

    console.log(entry);

    return(
        <section className="entry">
            <img src={imageUrl} alt={title} />
            <div className="section-contents">
                <div className="section-location">
                    <img src={locationPin} alt="location-pin-icon" />
                    <h5 className="location">{location}</h5>
                    <a href={googleMapsUrl} className="google-maps-link">View on Google Maps</a>
                </div>
                <h3 className="title">{title}</h3>
                <h4 className="date">{startDate} - {endDate}</h4>
                <p className="description">{description}</p>
            </div>
            <hr/>
        </section>
    );
}