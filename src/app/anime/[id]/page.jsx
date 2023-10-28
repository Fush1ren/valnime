import { getAnimeRes } from "@/app/lib/api-lib";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const AnimeDetail = async ({params: {id}}) => {

    const anime = await getAnimeRes(`anime/${id}`)

    //const season_raw = anime.data.season
    //const capSeason = season_raw[0].toUpperCase() + season_raw.slice(1)
    //const season = `${capSeason} ${anime.data.year}`

    const premiered = () => {
        const season_raw = anime.data.season
        const capSeason = season_raw[0].toUpperCase() + season_raw.slice(1)
        const season = `${capSeason} ${anime.data.year}`
        return season
    }

    return(
        <div>
            <div className="pt-4 px-4">
                <h3 className="text-white font-bold md:text-2xl text-xl md:text-left text-center">{anime.data.title}</h3>
            </div>
            <div className="flex p-4 sm:flex-row flex-col sm:items-start items-center max-w-full">
                <div className="pt-px flex flex-col text-white w-72 border-2 border-gray-800 rounded">
                    <Image src={anime.data.images.jpg.image_url} alt={anime.data.images.webp.image_url} 
                        priority={true} 
                        width={250}
                        height={250}
                        className="w-full rounded object-cover pb-2"
                    />
                    <div className="text-white py-4 px-4">     
                        <h3 className="font-bold text-center pb-2">INFORMATION</h3>
                        <h3>Type : {anime.data.type}</h3>
                        <h3>Source : {anime.data.source}</h3>
                        <h3>Episodes : {anime.data.episodes}</h3>
                        <h3>Status : {anime.data.status}</h3>
                        <h3>Aired : {anime.data.aired.string}</h3>
                        <h3>Premiered :
                            { anime.data.season != null ?
                                ` ${anime.data.season[0].toUpperCase() + anime.data.season.slice(1)} `
                             : null
                            }
                            { anime.data.year != null ?   
                                ` ${anime.data.year}`
                                :
                                null
                            }
                               
                        </h3>
                        
                        <h3>Score : {anime.data.score} by {anime.data.scored_by} users</h3>
                        <h3>Rank : #{anime.data.rank}</h3>
                        <h3>Popularity : #{anime.data.popularity}</h3>
                        <h3>Genres : {anime.data.genres?.map((arr) => {
                            return(`${arr.name}`)
                        }).join(', ')}
                        </h3>
                    </div>
                </div>
                <div className="flex text-white sm:pl-6 sm:pr-4 px-4 pt-px w-full flex-col gap-4 sm:text-left text-center sm:items-start items-center sm:text-lg text-base">
                    <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
                    <h3 className="font-bold ">{anime.data.duration} | {anime.data.rating}</h3>
                    <p className="text-justify">{anime.data.synopsis}</p>
                </div>
            </div>
            
        </div>
    )
}

export default AnimeDetail;


/*
<div className="flex p-4">
                <div className="flex flex-col border-2 border-gray-800 rounded py-4 w-60">
                    <h3 className="text-white px-4 ">Type : {anime.data.type}</h3>
                    <h3 className="text-white px-4">Source : {anime.data.source}</h3>
                    <h3 className="text-white px-4">Episodes : {anime.data.episodes}</h3>
                    <h3 className="text-white px-4">Status : {anime.data.status}</h3>
                    <h3 className="text-white px-4">Aired : {anime.data.aired.string}</h3>
                    <h3 className="text-white px-4">Premiered : {season}</h3>
                    <h3 className="text-white px-4">Score : {anime.data.score} by {anime.data.scored_by} users</h3>
                    <h3 className="text-white px-4">Rank : #{anime.data.rank}</h3>
                    <h3 className="text-white px-4">Popularity : #{anime.data.popularity}</h3>
                    <h3 className="text-white px-4">Genres : {anime.data.genres.map((arr) => {
                        //console.log(arr.name.length)
                        return(`${arr.name}`)
                    }).join(', ')}
                    </h3>
                </div>
                <div className="flex flex-col">
                    
                </div>
            </div>
*/