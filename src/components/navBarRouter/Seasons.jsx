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
           <div id="episodes">
               <div className="card">
                   <div className="row" style={{width: '100%', "margin": "3px"}}>
                       {
                           seasons.map((item) => {
                                   return (
                                       <div className="col-3">
                                           <div className="card" style={{"margin": "2px"}}>
                                               <img src={item.image.medium} className="card-img-top" alt="..."/>

                                           </div>
                                       </div>
                                   )
                               }
                           )
                       }
                   </div>
                </div>
            </div>
       </>

    );
};


export default Seasons;