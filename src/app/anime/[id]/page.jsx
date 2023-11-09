"use client"

import { getAnimeRes, getNestedAnimeRes } from "@/lib/api-lib";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import { useState, useEffect } from "react";
import Image from "next/image";

const AnimeDetailWithTitle = ({params: {id}}) => {
    const [ anime, setAnime ] = useState()
    const [ chara, setChara ] = useState()
    const [ showAllData, setShowAllData] = useState(false);
    
    const getAnime = async () => {
        return setAnime(await getAnimeRes(`anime/${id}`))
    }

    const getChara = async () => {
        const data = []
        let rawSeiyuu = await getAnimeRes(`anime/${id}/characters`)
        for(let i = 0; i < rawSeiyuu.data.length; i++){
            for(let j = 0; j < rawSeiyuu.data[i].voice_actors.length; j++){
                if(rawSeiyuu.data[i].voice_actors[j].language === "Japanese"){
                    rawSeiyuu.data[i].voice_actors = rawSeiyuu.data[i].voice_actors[j]
                }
            }
        }
        return setChara(rawSeiyuu)
    }

    useEffect(() => {
        getAnime()
        getChara()
    }, [])

    const renderData = showAllData ? chara?.data : chara?.data.slice(0, 4);
    
    return(
        <div>
            <div className="pt-4 px-4">
                <h3 className="text-white font-bold md:text-2xl text-xl md:text-left text-center">{anime?.data.title}</h3>
            </div>
            <div className="flex p-4 md:flex-row flex-col sm:items-start items-center max-w-full">
                <div className="pt-px flex flex-col text-white w-72 border-2 border-gray-800 rounded-lg">
                    { anime?.data.images?.webp.image_url === undefined ? null :
                        <Image src={anime?.data.images?.webp.image_url} alt="poster"
                            loading={"lazy"}
                            width={250}
                            height={250}
                            className="w-full rounded object-cover pb-2"
                        />
                    }
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
                        <h3>Studio : {anime?.data.studios?.map((arr) => {
                            return(`${arr.name}`)
                        }).join(', ')}
                        </h3>
                    </div>
                </div>
                <div className="flex text-white sm:pl-6 sm:pr-4 px-4 pt-px w-full flex-col gap-4 sm:text-left text-center sm:items-start items-center sm:text-lg text-base">
                    <VideoPlayer youtubeId={anime?.data.trailer?.youtube_id} />
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
                    <div className="grid lg:grid-cols-2 grid-cols-1 text-white">
                        {renderData?.map((item, index) => {
                            return(
                                <div className="flex justify-between border-2 border-gray-800" key={index}>
                                    <div className="flex md:flex-row flex-col md:gap-4 gap-2 md:p-2 py-2 px-4">
                                        <div className="flex items-center max-w-25 min-w-25"> 
                                            <Image className="md:w-full w-min border rounded-lg border-none" src={item?.character.images?.webp.image_url} priority={true} width={80} height={80} alt="character" />
                                        </div>
                                        <div className="flex flex-col md:w-40 gap-2 md:p-0 py-2"> 
                                            <h3 className="md:text-lg text-sm font-normal">{item.character.name}</h3>
                                            <h3 className="md:text-sm text-xs font-thin">{item.role}</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-row lg:p-2 px-4">
                                        {item.voice_actors !== undefined
                                            ? 
                                            <div className="">
                                                {
                                                    item?.voice_actors.person?.images === undefined ? null :
                                                    <div className="flex md:flex-row flex-col md:gap-4 gap-2 md:p-0 p-2 px-4"> 
                                                        <div className="flex items-center max-w-25 min-w-25">                                                             
                                                            <Image className="md:w-full w-min border rounded-lg border-none" src={item?.voice_actors.person?.images?.jpg.image_url} priority={true} width={80} height={80} alt="seiyuu" />
                                                        </div>
                                                        <div className="flex flex-col md:w-40 w-24 gap-2 md:py-0 py-2"> 
                                                            <p className="md:text-lg text-sm font-normal">{item.voice_actors.person?.name}</p>
                                                            <p className="md:text-sm text-xs font-thin">{item.voice_actors.language}</p>
                                                        </div>
                                                    </div>
                                                } 
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