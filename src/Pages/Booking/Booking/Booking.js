import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const {serviceId} = useParams();
    const [service, setService] = useState({})
    useEffect( () => {
        fetch(`https://enigmatic-taiga-65527.herokuapp.com/booking/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data));
    }, [])
    return (
        <div>
            <h2>County Name:{service.name}</h2>
            <h2>this is booking: {serviceId}</h2>
            
        </div>
    );
};

export default Booking;