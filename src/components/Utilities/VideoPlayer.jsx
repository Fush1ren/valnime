"use client"

import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
    const option = {
        width: "100%",
        height: "300"
    }

    return(
        <div className=" md:pt-0 pt-4 md:items-start md:w-550 w-350 items-center">
            <YouTube 
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
                className=""
            />
        </div>
    )
}

export default VideoPlayer;