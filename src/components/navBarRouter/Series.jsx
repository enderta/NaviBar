import React from 'react';
import NaviBar from "./NaviBar";
import {Route} from "react-router";
import Seasons from "./Seasons";

const Series = () => {
    const [show, setShow] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [filtered, setFiltered] = React.useState([]);

    React.useEffect(() => {
            fetch('https://api.tvmaze.com/shows')
                .then(response => response.json())
                .then(data => {
                    setShow(data);
                    setFiltered(data);
                });
        }
        , []);

    const handleChange = (event) => {
        setSearch(event.target.value);
        setFiltered(show.filter((show) => show.name.toLowerCase().includes(search.toLowerCase())));
    }


    return (
        <div >
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                                <use xlinkHref="#bootstrap"/>
                            </svg>
                        </a>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <a href="/#" className="nav-link px-2 text-secondary">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/movies" className="nav-link px-2 text-white">
                                    Moveis
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <div id="root">
                <div id="controls">

                </div>
                <div id="episodes" >
                    <div className="card" style={{background:"black"}}>
                        <div className="row" style={{width: '100%', "margin": "3px"}} >
                            {
                                filtered.map((item) => {
                                        return (
                                            <div className="col-3">
                                                <div className="card" style={{"margin": "2px"}} style={{background:"black",border:"darkred solid",margin:'2px',padding:'2px'}}>
                                                    <img src={item.image.medium} className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5  style={{color:"green"}} className="card-title">Name: {item.name}</h5>
                                                        <p style={{color:"green"}} className="card-text">Rating: {item.rating.average}</p>
                                                        <p style={{color:"green"}} className="card-text">Language: {item.language}</p>
                                                        <p style={{color:"green"}} className="card-text">Genres: {item.genres[0]}</p>
                                                        <p style={{color:"green"}} className="card-text">Status: {item.status}</p>
                                                        <div>

                                                            <a href={'/series/' + item.id} className="btn btn-primary">Seasons</a>



                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}





            export default Series;