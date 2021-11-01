import React, { useEffect, useState } from 'react';

const AllManage = () => {
    const [services, setServices] = useState([])
    useEffect(
        () => {
            fetch('https://enigmatic-taiga-65527.herokuapp.com/services')
            .then(res =>res.json())
            .then(data => setServices(data))
        }, []
    );
    const handleDelete = id => {
        const url = `https://enigmatic-taiga-65527.herokuapp.com/services/${id}`;
        fetch (url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount){
                alert ('deleted')
                const remaining = services. filter(service => service._id !== id);
                setServices(remaining);

            }
           
        })}
    return (
        <div>
            <h2>all Manage Services</h2>
            {
                services.map(service => <div key={service.id}>
                    <h3>{service.name}</h3>
                    <h5>{service.description}</h5>
                    <h2>{service.price}</h2>
                    
                    <button className="btn btn-danger p-2 mb-4" onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default AllManage;