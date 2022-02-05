import React from 'react';

// Adding functional component and using custom property
const Intro = props => (
    <p className='App-Intro'>
        {/* My first functional component */}
        {props.message}
    </p>  
);

export default Intro;