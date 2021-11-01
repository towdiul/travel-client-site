import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Not Found</h1>
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;