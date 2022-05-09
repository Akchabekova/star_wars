import React from 'react';
import './Spinner.css'
import RingLoader from "react-spinners/RingLoader";

const Spinner = () => {
    return (
        <div className="spinner">
            <RingLoader color={"#dec666"} size={60} />
        </div>
    );
};

export default Spinner;