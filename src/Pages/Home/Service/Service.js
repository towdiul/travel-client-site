import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, Country, price, description, img } = service;
    return (
        <div className="container mt-2  ">
        <div className=" row  h-100  ">
            <div className=" h-75   ">
                <div className="card-sl m-4  ">
                    <div className="card-image">
                        <img src={img} />
                    </div>

                
                    <div className="card-heading">
                        {Country}
                    </div>
                    <div className="card-text">
                        {description}
                    </div>
                    <div className="card-text">
                        $ {price}
                    </div>
                    <a href={`/booking/${_id}`} className="card-button"> Booking</a>
                </div>
            </div>
        </div>  
        </div>
    );
};

export default Service;