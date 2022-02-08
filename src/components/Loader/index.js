import React from "react";
import logoLoad from '../../assets/logo192.png';

const Loader = props => (
    <div>
        <img
            style={{ width: 50 }}
            alt="Loader Icon"
            src={logoLoad} />
    </div>
);

export default Loader;