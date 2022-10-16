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
            <div className="card" style={{background:"black"}}>
                <div className="row" style={{width: '100%', "margin": "3px"}}>
                    {
                        seasons.map((item) => {
                                return (
                                    <div className="col-3" style={{background:"black"}}>
                                        <div className="card" style={{"margin": "2px"}} style={{background:"black",border:"darkred solid",margin:'20px',padding:'2px'}}>
                                            <img src={item.image.medium} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h5 style={{color:"green"}} className="card-title">Name: {item.name}</h5>
                                                <p style={{color:"green"}} className="card-text">Season: {item.season}</p>
                                                <p style={{color:"green"}} className="card-text">Number: {item.number}</p>
                                                <p  style={{color:"green"}} className="card-text">Airdate: {item.airdate}</p>
                                                <p  style={{color:"green"}} className="card-text">Runtime: {item.runtime}</p>

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