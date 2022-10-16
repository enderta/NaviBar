import React from 'react';

const Seasons = () => {
    const [seasons, setSeasons] = React.useState([]);
    const [id, setId] = React.useState(1);

    React.useEffect(() => {
        fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
            .then(response => response.json())
            .then(data => setSeasons(data));
    }
    , []);

    return (
        <div>
            <div id="root">
                <div id="controls">
                    <select id="selectShow">
                        {
                            seasons.map((season) => {
                                    return (
                                        <option key={season.id} value={season.id}>{season.premiereDate} - {season.endDate}</option>
                                    )
                                }
                            )
                        }
                    </select>
                </div>
                <div id="episodes">
                    <div className="card">
                        <div className="row" style={{width: '100%', "margin": "3px"}}>
                            {
                                seasons.map((season) => {
                                        return (
                                            <div className="col-3">
                                                <div className="card" style={{"margin": "2px"}}>
                                                    <img src={season.image.medium} className="card-img-top" alt="..."/>
                                                    <div className="card-body">
                                                        <h5 className="card-title">Name: {season.name}</h5>
                                                        <p className="card-text">Rating: {season.rating.average}</p>
                                                        <p className="card-text">Language: {season.language}</p>
                                                        <p className="card-text">Genres: {season.genres[0]}</p>
                                                        <p className="card-text">Status: {season.status}</p>
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


export default Seasons;