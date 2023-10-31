import { getAnimeRes, getNestedAnimeRes } from "@/lib/api-lib";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const AnimeDetail = async ({params: {id}}) => {

    const anime = await getAnimeRes(`anime/${id}`)
    const characters = await getAnimeRes(`anime/${id}/characters`)
    
    const showmoreChara = () => {
        
    }

    return(
        <div>
            <div className="pt-4 px-4">
                <h3 className="text-white font-bold md:text-2xl text-xl md:text-left text-center">{anime.data.title}</h3>
            </div>
            <div className="flex p-4 sm:flex-row flex-col sm:items-start items-center max-w-full">
                <div className="pt-px flex flex-col text-white w-72 border-2 border-gray-800 rounded-lg">
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
            <div className="flex flex-col gap-4 text-white m-4 ">
                <div className="flex flex-row p-2 justify-between">
                    <h3 className="font-bold text-xl">Characters & Voice Actors</h3>
                    <span className="flex underline cursor-pointer">Lihat Semua</span>
                </div>
                <div className="flex flex-col p-2">
                    <div className="grid grid-cols-2 text-white">
                        {characters.data.map((item, index) => {
                            return(
                                <div className="flex justify-between border border-gray-600" key={index}>
                                    <div className="flex flex-row gap-4 p-2">
                                        <div className="flex"> 
                                            <Image src={item.character.images.jpg.image_url} priority={true} width={80} height={80} alt="" />
                                        </div>
                                        <div className="flex flex-col w-32"> 
                                            <h3 className="text-lg font-normal">{item.character.name}</h3>
                                            <h3 className="text-sm font-thin">{item.role}</h3>
                                        </div>
                                    </div>
                                    <div className="flex flex-row p-2"> 
                                        {
                                            item.voice_actors.map((VA, index) => {
                                                return(
                                                    <div className="" key={index}>
                                                        {
                                                            VA.language === "Japanese" ? 
                                                            <div className="flex flex-row gap-4 px-4">
                                                                <div className="flex">                                                             
                                                                    <Image src={VA.person.images.jpg.image_url} priority={true} width={80} height={80} alt="" />
                                                                </div>
                                                                <div className="flex flex-col w-32"> 
                                                                    <p className="text-lg font-normal">{VA.person.name}</p>
                                                                    <p className="text-sm font-thin">{VA.language}</p>
                                                                </div>
                                                            </div>
                                                            : null
                                                        }
                                                    </div>
                                                )
                                            })
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

export default AnimeDetail;


/*<div className="flex float-right">
<div className="">
    <Image src={arr.voice_actors?.person.images?.jpg.image_url} priority={true} width={100} height={150} alt='...' />
</div>
    <h1>{arr.voice_actors?.person[0].name}</h1>
    <spam>{arr.voice_actors.language}</spam>
</div>*/

/*
<div className="m-4 text-white">
<h3>Characters & Voice Actors</h3>
{
characters.data.slice(0, 10).map((arr, index) => {
    return(
        <div className=" bg-gray-900 p-4 gap-4 grid grid-cols-2" key={index}>
            <div className="gap-2">
                <div className="">
                    <Image src={arr.character.images.jpg.image_url} priority={true} width={100} height={150} alt={arr.character.images.webp.image_url} />
                </div>
                <div className=""> 
                    <h1>{arr.character.name}</h1>
                    <span>{arr.role}</span>
                </div>
            </div>
            {arr.voice_actors.map((va, i) => {
                return(
                    <div key={i}>
                        {
                            va.language === "Japanese" ? 
                                <div className="">
                                    <div className="">
                                        <Image src={va.person.images?.jpg.image_url} priority={true} width={100} height={150} alt='...' />
                                    </div>
                                    <div className="flex flex-col"> 
                                        <h1>{va.person.name}</h1>
                                        <span>{va.language}</span>
                                    </div>
                                        
                                </div>
                            : null
                        }
                    </div>
                )
            })}
        </div>
    )
})}
</div>
*/