import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/singleSeries';

const Main = props => (
    <Routes>
        <Route exact path="/" element={<Series />}/>
        {/* <Route exact path="/series/:id" element={<SingleSeries />}/> */}
        <Route exact path="/series/:id" element={<SingleSeries />}/>
        
    </Routes>
);

export default Main;
