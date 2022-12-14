import React from 'react';
import NaviBar from "./NaviBar";
import {Outlet, Route, Router, Routes} from "react-router";
import Seasons from "./Seasons";
import Series from "./Series";
import HomeNavi from "./HomeNavi";
import Footer from "./Footer";
import Movies from "./Movies";
import ScrollToTop from "./ScrollToTop";

const MainNavi = () => {
    return (<div>
        <ScrollToTop />
        <Routes>
            <Route path="/" element={<HomeNavi/>}/>

            <Route path="/series" element={<Series/>}>
                

            </Route>
            <Route path="/series/:id" element={<Seasons/>}/>
            <Route path='/movies' element={<Movies/>}/>
        </Routes>



</div>)

};

export default MainNavi;