"use client"

import { useEffect, useState } from "react"
import { getAnimeRes } from "@/lib/api-lib";
import SeasonsList from "@/components/Utilities/SeasonsList";

const SeasonsAnime = () => {
    const [getSeasons , setSeasons] = useState()
    const [seasonNow, setSeasonNow] = useState()
    const [page, setPage] = useState()

    const fetchData = async () => {
        const seasonList = await getAnimeRes("seasons")
        setSeasons(seasonList)
    }

    const fetchNow = async () => {
        const SeasonNow = await getAnimeRes("seasons/now", "limit=1")
        try{
            return SeasonNow
        }
        catch(e){
            console.error(e)
        }
        // const dataYearNow = SeasonNow?.data.year;
        // for(let i = 0; i < getSeasons?.data?.length; i++){
        //     //console.log(getSeasons?.data[i].year.includes(SeasonNow?.data[0]?.year))
        //     if(getSeasons?.data[i].year === dataYearNow) return setPage(i)
        // }
        //setSeasonNow(`${SeasonNow.data[0]?.season.charAt(0).toUpperCase() + SeasonNow.data[0]?.season.slice(1)} ${SeasonNow.data[0]?.year}`)
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        fetchNow().then(res => {
            //const dataYearNow = res?.data[0].year;
            res?.data?.map((data) => {
                for(let i = 0; i < getSeasons?.data?.length; i++){
                    //console.log(getSeasons?.data[i].year.includes(dataYearNow))
                    if(getSeasons?.data[i].year === data.year) return setPage(i)
                }
            })
            //console.log(res)
        })
    })

    // for(let i = 0; i < getSeasons?.data.length; i++){
    //     console.log(getSeasons.data[i])
    // }

    return(
        <div className="text-white p-4">
            {console.log(page)
            }
            <div>
                <div className="flex text-center justify-center">
                    <h1 className="font-bold text-xl">Seasonal Anime</h1>
                </div>
                <div>
                    {/* <SeasonsList seasonNowTitle={seasonNow} setPage={setPage} /> */}
                    {/* {
                        getSeasons?.data?.map((data, index) => {
                            {console.log(getSeasons.data)}
                            return(
                                <div className="flex" key={index}>
                                    {data.seasons.map((arr, index) => {
                                        return(
                                            <h1 key={index}>{arr.charAt(0).toUpperCase() + arr.slice(1)} {data.year}</h1>
                                        )
                                    })}
                                </div>
                            )
                        })
                    } */}
                </div>
            </div>
        </div>
    )
}

export default SeasonsAnime