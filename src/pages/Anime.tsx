import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAnimeRes } from "../lib/api_lib";
import RadioButton from "../Components/RadioButton";

type Details = {
    'score'? : String,
    'scored_by'? : String,
    'rank'? : String,
    'popularity'? : String,
    'members'? : String,
    'synopsis'? : String,
    'trailer'? : {
        "youtube_id"? : String,
        "url"? : String,
        "embed_url"? : String
    }
}

const Anime: React.FC<{setShowNavbar: any, setShowFooter: any}> = ({setShowNavbar, setShowFooter}) => {
    const [data, setData] = useState<any>('');
    const [character, setCharacter] = useState<any>('');
    const [pictures, setPictures] = useState<any>('');
    const [dataDetails, setDataDetails] = useState<Details>();
    const MonthList: string[] = [
        'January', 'February', 'March', 
        'April', 'May', 'June', 
        'July', 'August', 'September', 
        'October', 'November', 'December'
    ]

    useLayoutEffect(() => {
        setShowNavbar(true);
        setShowFooter(true);
    }, [])

    
    const { title } = useParams();
    const id: any = title?.toString();
    const navigate = useNavigate();
    
    const getAnimeById = async () => {
        try {
            const data = await getAnimeRes(`anime/${id}/full`);
            if(data.status == 404){
                navigate('/notfound')
            }
            else{
                setDataDetails({
                    'score' : data.data?.score,
                    'scored_by' : data.data?.scored_by,
                    'rank' : data.data?.rank,
                    'popularity' : data.data?.popularity,
                    'members' : data.data?.members,
                    'synopsis' : data.data?.synopsis,
                    'trailer' : {
                        'youtube_id' : data.data?.trailer?.youtube_id,
                        'url' : data.data?.trailer?.url,
                        'embed_url' : data.data?.trailer?.embed_url
                    }
                });
            }
            return setData(data);
        } catch (e) {
            console.log(e);
        }
    }

    const getCharacter = async () => {
        try{
            const data = await getAnimeRes(`anime/${id}/characters`);
            setCharacter(data)
        } catch(e) {
            console.log(e);
        }
    }
    
    const getPictures = async () => {
        try{
            const data = await getAnimeRes(`anime/${id}/pictures`);
            setPictures(data)
        } catch(e) {
            console.log(e)
        }
    }

    
    useEffect(() => {
        getAnimeById()
        getCharacter()
        getPictures()

        let timer = setTimeout(() => {
            getAnimeById()
            getCharacter()
            getPictures()
            
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    

    return (
        <div className=" w-full bg-primary-50 h-full text-blue-500 dark:bg-gray-700 dark:text-gray-300">
            <div className="px-10 pt-2 pb-2">
                <div className="flex flex-col px-2 pb-2">
                    <h2 className="font-bold text-lg text-blue-500 dark:text-">{data.data?.title}</h2>
                    <p className=" text-gray-500 font-semi-bold text-base dark:text-gray-300">{data.data?.title_english}</p>
                </div>
                <div className="flex flex-row pt-2">
                    <div className="flex flex-col w-80 px-2">
                        <div className="rounded-lg">
                            <img className=" w-[280px] h-96 rounded-lg hover:shadow-lg duration-500 shadow-lg border-2 hover:border-blue-500 border-gray-500 hover:border-2" src={data.data?.images.webp?.large_image_url} width={100} height={100} />
                        </div>
                        <div className="text-black dark:text-gray-400 py-5">
                            <div className="flex flex-col py-2">
                                <h2 className="font-semibold border-b border-gray-700 dark:border-gray-500">Alternative Titles</h2>
                                <div className="flex flex-col text-sm pt-2 text-gray-500 dark:text-gray-300 gap-2">
                                    <span className="font-semibold">Synonyms: 
                                        <span className="font-normal">
                                            {` ${ data.data?.title_synonyms?.map((item: any) => {
                                                    return(`${item}`)
                                                    }).join(', ')}`
                                            }
                                        </span>
                                    </span>
                                    <span className="font-semibold">Japanese: 
                                        <span className="font-normal">
                                            {` ${data.data?.title_japanese}`}
                                        </span>
                                    </span>
                                    <span className="font-semibold">English: 
                                        <span className="font-normal">
                                             {` ${data.data?.title_english}`}
                                        </span>
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col py-2">
                                <h2 className="font-semibold border-b border-gray-700 dark:border-gray-500">Information</h2>
                                <div className="flex flex-col text-sm pt-2 text-gray-500 dark:text-gray-300 gap-2">
                                    <span className="font-semibold">Type: 
                                        <span className="font-normal">
                                            {` ${data.data?.type}`}
                                        </span>
                                    </span>
                                    <span className="font-semibold">Episodes:
                                        <span className="font-normal">
                                             {` ${data.data?.episodes}`}
                                        </span>
                                    </span>
                                    <span className="font-semibold">Status:
                                        <span className="font-normal">
                                             {` ${data.data?.status}`}
                                        </span>
                                    </span>
                                    <span className="font-semibold">Aired: 
                                        <span className="font-normal">
                                            {
                                                data.data?.aired?.prop?.from?.day === null || data.data?.aired?.prop?.from?.day === undefined ?
                                                ``
                                                :
                                                ` ${data.data?.aired?.prop?.from?.day} `
                                            } 
                                            {
                                                data.data?.aired?.prop?.from?.month === null || data.data?.aired?.prop?.from?.month === undefined ?
                                                ``
                                                :
                                                `${MonthList[data.data?.aired?.prop?.from?.month]} `
                                            } 
                                            {
                                                data.data?.aired?.prop?.from?.year === null || data.data?.aired?.prop?.from?.day === undefined?
                                                ``
                                                :
                                                `${data.data?.aired?.prop?.from?.year} `
                                            } 
                                            to 
                                            {
                                                data.data?.aired?.prop?.to?.day === null || data.data?.aired?.prop?.to?.day === undefined ?
                                                ` `
                                                
                                                :
                                                ` ${data.data?.aired?.prop?.to?.day}`
                                            }
                                            {
                                                data.data?.aired?.prop?.to?.month === null || data.data?.aired?.prop?.to?.month === undefined ?
                                                ` `
                                                
                                                :
                                                ` ${MonthList[data.data?.aired?.prop?.to?.month]} `
                                            }
                                            {
                                                data.data?.aired?.prop?.to?.year === null || data.data?.aired?.prop?.to?.year === undefined ?
                                                ` `
                                                
                                                :
                                                ` ${data.data?.aired?.prop?.to?.year}`
                                            }
                                        </span>
                                    </span>
                                    <span className="font-semibold">Premired: 
                                        <span className="font-normal">
                                            {
                                                data.data?.season != null ?
                                                ` ${data.data?.season.toUpperCase()}` :
                                                ' ?'
                                            }
                                            {
                                                data.data?.year != null ?
                                                ` ${data.data?.year}` :
                                                ' ?'
                                            }
                                        </span>
                                    </span>
                                    <span className="font-semibold">Broadcast: 
                                        <span className="font-normal">
                                            {
                                                data.data?.broadcast?.string != null ?
                                                ` ${data.data?.broadcast?.string}` :
                                                ' ?'
                                            }
                                        </span>
                                    </span>
                                    <span className="font-semibold">Producers:
                                        <span className="font-normal">
                                            {
                                                data.data?.producers != null ?
                                                ` ${data.data?.producers?.map((prod : any) => {
                                                    return(` ${prod.name}`)
                                                }).join(', ')}` :
                                                ' ?'
                                            }
                                        </span>
                                    </span>
                                    <span className="font-semibold">Studios: 
                                        <span className="font-normal">
                                            {
                                                data.data?.studios != null ?
                                                `${data.data?.studios?.map((studio: any) => {
                                                    return(` ${studio.name}`)
                                                }).join(', ')}` :
                                                ' ?'
                                            }
                                        </span>
                                    </span>
                                    <span className="font-semibold">Source:
                                        <span className="font-normal">
                                            {
                                                data.data?.source != null ? 
                                                ` ${data.data?.source}` :
                                                ' ?'
                                            }
                                        </span>
                                    </span>
                                    <span className="font-semibold">Genres:
                                        <span className="font-normal">
                                            {
                                                data.data?.genres != null ? 
                                                `${data.data?.genres?.map((genre: any) => {
                                                    return(` ${genre.name}`)
                                                }).join(', ')}` :
                                                ' ?'
                                            }
                                        </span>
                                    </span>
                                    <span className="font-semibold">Demographics:
                                        <span className="font-normal">
                                            {
                                                data.data?.demographics != null ? 
                                                `${data.data?.demographics?.map((demo: any) => {
                                                    return(` ${demo.name}`)
                                                }).join(', ')}` :
                                                ' ?'
                                            }
                                        </span>
                                    </span>
                                    <span className="font-semibold">Duration:
                                        <span className="font-normal">
                                            {
                                                data.data?.duration != null ? 
                                                ` ${data.data?.duration}` :
                                                ' ?'
                                            }
                                        </span>
                                    </span>
                                    <span className="font-semibold">Rating:
                                        <span className="font-normal">
                                            {
                                                data.data?.rating != null ? 
                                                ` ${data.data?.rating}` :
                                                ' ?'
                                            }
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col pl-4 pr-2 w-[1000px]">
                        <div className="px-2 text-gray-600 dark:text-gray-300">
                            <RadioButton data={dataDetails} character={character} pictures={pictures}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Anime;