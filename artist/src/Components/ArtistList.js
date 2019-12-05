import React,{Component} from 'react';
import {Link} from 'react-router-dom';



const ArtistList = ({artists}) => {




   const list = (artist) =>{

    artist ? artist.map(art => (

        <div>
            
        </div>

    )) : (
        <div>
         <h1>Loading</h1>
        </div>
    )


   }


    return(
        <div className="artists_list">
            <h4>The artists</h4>

            <div className="artist_container">
                {list(artists)}
            </div>
        </div>
    )



    }


export default ArtistList