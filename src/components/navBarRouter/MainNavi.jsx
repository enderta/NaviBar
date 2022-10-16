import React from 'react';
import NaviBar from "./NaviBar";
import {Route, Router, Routes} from "react-router";
import Seasons from "./Seasons";
import Series from "./Series";
import AboutNavi from "./AboutNavi";
import HomeNavi from "./HomeNavi";
import Footer from "./Footer";
import Movies from "./Movies";

const MainNavi = () => {
    return (<div>

        <Routes>
            <Route path="/" element={<HomeNavi/>}/>

            <Route path="/series" element={<Series/>}/>
            <Route path="/series/:id" element={<Seasons/>}/>
            <Route path='/movies' element={<Movies/>}/>
        </Routes>

    <Footer/>

</div>)

};

export default MainNavi;