import React from "react"

export default function Card(props) {
    console.log(props)
    return (
        <div className="card">
            <img className="card-img" src={props.imageUrl} />
            <div className="card-text">
                <div className="card-text_sub">
                    <i class="fa-solid fa-location-dot" ></i>
                    <div className="card-loc">{props.location}</div>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h2 className="card-text_title">{props.title}</h2>
                <div className="card-text_time">{`${props.startDate} - ${props.endDate}`}</div>
                <p className="card-text_description">{props.description}</p>
            </div>
        </div >
    )
}   