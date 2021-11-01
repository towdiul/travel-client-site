import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://enigmatic-taiga-65527.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services ">
            <h2 className="mt-2 p-2"><span>Find </span>Your Tour</h2>
            <hr className="w-50 mx-auto"/>
            <div className="service-container row row-cols-1 row-cols-md-3 mb-2 g-1 w-100 mx-auto ">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;