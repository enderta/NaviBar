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
        <div>
            <NaviBar data={filtered} change={handleChange}/>
            <div id="root">
                <div id="controls">

                </div>
                <div id="episodes">
                    <div className="card">
                        <div className="row" style={{width: '100%', "margin": "3px"}}>
                            {
                                filtered.map((item) => {
                                        return (
                                            <div className="col-3">
                                                <div className="card" style={{"margin": "2px"}}>
                                                    <img src={item.image.medium} className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Name: {item.name}</h5>
                                                        <p className="card-text">Rating: {item.rating.average}</p>
                                                        <p className="card-text">Language: {item.language}</p>
                                                        <p className="card-text">Genres: {item.genres[0]}</p>
                                                        <p className="card-text">Status: {item.status}</p>
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