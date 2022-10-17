import React from 'react';
import {useParams} from "react-router";

const Seasons = (props) => {
    const [seasons, setSeasons] = React.useState([]);
    let params = useParams();

    React.useEffect(() => {
            fetch(`https://api.tvmaze.com/shows/${params.id}/episodes`)
                .then(response => response.json())
                .then(data => setSeasons(data));
        }
        , []);

    return (
        <>
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
                                <a href="/series" className="nav-link px-2 text-white">
                                    Series
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



            <div className="card" style={{background: "black"}}>
                <div className="row" style={{width: '100%', "margin": "3px"}}>
                    {
                        seasons.map((item) => {
                                return (
                                    <div className="col-3" style={{background: "black"}}>
                                        <div className="card" style={{"margin": "2px"}} style={{
                                            background: "black",
                                            border: "darkred solid",
                                            margin: '20px',
                                            padding: '2px'
                                        }}>
                                            <img src={item.image.medium} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 style={{color: "green"}}
                                                    className="card-title">Name: {item.name}</h5>
                                                <p style={{color: "green"}}
                                                   className="card-text">Season: {item.season}</p>
                                                <p style={{color: "green"}}
                                                   className="card-text">Number: {item.number}</p>
                                                <p style={{color: "green"}}
                                                   className="card-text">Airdate: {item.airdate}</p>
                                                <p style={{color: "green"}}
                                                   className="card-text">Runtime: {item.runtime}</p>

                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        )
                    }


                </div>


            </div>


        </>


    )

};


export default Seasons;