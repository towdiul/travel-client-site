import React, { useEffect, useState } from 'react';
import Guide from '../Guide/Guide';

const Guides = () => {
    const [guides, setGuides] = useState([]);
    useEffect(() => {
        fetch('guides.json')
            .then(res => res.json())
            .then(data => setGuides(data));
            
    }, [])
    return (
        <div className="container">
            <h2><span>Our </span>Guides</h2>
            <hr className="w-50 mx-auto" />
            
            <div className="row mb-2 ">
                {
                    guides.map(guide => <Guide
                    guide={guide}></Guide>)
                }
            </div>
            <div>
                <h2><span>Watch</span></h2>
                <hr className="w-50 mx-auto" />
                <iframe width="560" height="315" src="https://www.youtube.com/embed/csnD5EVL5z8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
    );
};

export default Guides;