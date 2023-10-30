"use client"

import { getAnimeRes, getNestedAnimeRes } from "@/lib/api-lib";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { useState, useEffect } from "react";
import Image from "next/image";

const AnimeDetailWithTitle = ({params: {id, title}}) => {
    const [ anime, setAnime ] = useState()
    const [ chara, setChara ] = useState()
    const [ showAllData, setShowAllData] = useState(false);

    //const characters = await getAnimeRes(`anime/${id}/characters`)
    
    const getAnime = async () => {
        return setAnime(await getAnimeRes(`anime/${id}`))
    }

    const getChara = async() => {
        return setChara( await getAnimeRes(`anime/${id}/characters`))
    }
    useEffect(() => {
        getAnime()
    }, [])
    
    useEffect(() => {
        getChara()
    }, [])
    
    const renderData = showAllData ? chara?.data : chara?.data.slice(0, 4);
    console.log(anime)
    
    return(
        <div>
            <div className="pt-4 px-4">
                <h3 className="text-white font-bold md:text-2xl text-xl md:text-left text-center">{anime?.data.title}</h3>
            </div>
            <div className="flex p-4 sm:flex-row flex-col sm:items-start items-center max-w-full">
                <div className="pt-px flex flex-col text-white w-72 border-2 border-gray-800 rounded-lg">
                    <Image src={anime?.data.images.jpg.image_url} alt={anime?.data.images.webp?.image_url} 
                        priority={true} 
                        width={250}
                        height={250}
                        className="w-full rounded object-cover pb-2"
                    />
                    <div className="text-white py-4 px-4">     
                        <h3 className="font-bold text-center pb-2">INFORMATION</h3>
                        <h3>Type : {anime?.data.type}</h3>
                        <h3>Source : {anime?.data.source}</h3>
                        <h3>Episodes : {anime?.data.episodes}</h3>
                        <h3>Status : {anime?.data.status}</h3>
                        <h3>Aired : {anime?.data.aired.string}</h3>
                        <h3>Premiered :
                            { anime?.data.season != null ?
                                ` ${anime?.data.season[0].toUpperCase() + anime?.data.season.slice(1)} `
                             : null
                            }
                            { anime?.data.year != null ?   
                                ` ${anime?.data.year}`
                                :
                                null
                            }
                               
                        </h3>
                        
                        <h3>Score : {anime?.data.score} by {anime?.data.scored_by} users</h3>
                        <h3>Rank : #{anime?.data.rank}</h3>
                        <h3>Popularity : #{anime?.data.popularity}</h3>
                        <h3>Genres : {anime?.data.genres?.map((arr) => {
                            return(`${arr.name}`)
                        }).join(', ')}
                        </h3>
                    </div>
                </div>
                <div className="flex text-white sm:pl-6 sm:pr-4 px-4 pt-px w-full flex-col gap-4 sm:text-left text-center sm:items-start items-center sm:text-lg text-base">
                    <VideoPlayer youtubeId={anime?.data.trailer.youtube_id} />
                    <h3 className="font-bold ">{anime?.data.duration} | {anime?.data.rating}</h3>
                    <p className="text-justify">{anime?.data.synopsis}</p>
                </div>
            </div>
            <div className="flex flex-col gap-4 text-white m-4 ">
                <div className="flex flex-row p-2 items-center justify-between">
                    <h3 className="font-bold md:text-lg text-base">Characters & Voice Actors</h3>
                    { renderData?.length >= 4 ?
                        <span className="flex underline cursor-pointer md:text-lg text-base px-px" onClick={() => setShowAllData(!showAllData)}>
                        {showAllData ? 'Tutup' : 'Lihat Semua'}
                        </span>
                        : null
                    }
                </div>
                <div className="flex flex-col p-2">
                    <div className="grid md:grid-cols-2 grid-cols-1 text-white">
                        {renderData?.map((item, index) => {
                            return(
                                <div className="flex justify-between border-2 border-gray-800" key={index}>
                                    <div className="flex md:flex-row flex-col md:gap-4 gap-2 md:p-2 py-2 px-4">
                                        <div className="flex items-center"> 
                                            <Image className="md:w-20 md:h-32 w-28 h-28 max-w-20 max-h-32" src={item.character.images.jpg.image_url} priority={true} width={80} height={80} alt="" />
                                        </div>
                                        <div className="flex flex-col w-40 gap-2 md:p-0 py-2"> 
                                            <h3 className="md:text-lg text-sm font-normal">{item.character.name}</h3>
                                            <h3 className="md:text-sm text-xs font-thin">{item.role}</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-row md:p-2 px-4">
                                        {item.voice_actors[0] !== undefined
                                            ? 
                                            <div className="flex md:flex-row flex-col md:gap-4 gap-2 md:p-2 py-2 px-4"> 
                                                <div className="flex items-center">                                                             
                                                    <Image className="md:w-20 md:h-32 w-28 h-28 max-w-20 max-h-32" src={item.voice_actors[0].person.images.jpg.image_url} priority={true} width={80} height={80} alt="" />
                                                </div>
                                                <div className="flex flex-col md:w-40 w-24 gap-2 md:p-0 py-2"> 
                                                    <p className="md:text-lg text-sm font-normal">{item.voice_actors[0].person.name}</p>
                                                    <p className="md:text-sm text-xs font-thin">{item.voice_actors[0].language}</p>
                                                </div>
                                            </div>
                                            : null
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AnimeDetailWithTitle;