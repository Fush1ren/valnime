"use client"

import Carousel from "../Carousel";

const TopAiringAnime = ({ api }) => {

    return(    
    <div className="px-10"> 
        <Carousel api={api} />
    </div> 
    )
}

export default TopAiringAnime;