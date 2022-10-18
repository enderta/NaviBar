import React from 'react';
import {useParams} from "react-router";
import './series.css'

const Seasons = (props) => {
    const [seasons, setSeasons] = React.useState([]);
    const [search, setSearch] = React.useState("");
    let params = useParams();

    React.useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${params.id}/episodes`)
            .then(response => response.json())
            .then(data => setSeasons(data));
    }, []);
    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <body>
        <header id='root'>
            <div className="container">
                <div
                    className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
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
                    <div>
                    </div>
                </div>

                <select className="form-select" aria-label="Default select example" onChange={handleChange}>
                    {seasons.map((season) => {
                            return (<option
                                value={season.name}>Season/Number: {season.season}/{season.number}-{season.name}</option>)
                        }
                    )}
                </select>
                <div id="episodes" >
                    <div className="card" style={{background:"black"}}>
                        <div className="row" style={{width: '100%', "margin": "3px"}} >
                            {
                                seasons.filter((season) => season.name.toLowerCase().includes(search.toLowerCase())).map((item) => {
                                        return (
                                            <div className="col-3">
                                                <div className="card" style={{"margin": "2px"}} style={{background:"black",border:"#D43C31 solid",margin:'2px',padding:'2px'}}>
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
                </div>
            </div>

        </header>


</body>


)

};


export default Seasons;