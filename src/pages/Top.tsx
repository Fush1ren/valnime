import { useEffect, useLayoutEffect, useState } from "react";
import { getAnimeRes } from "../lib/api_lib";
import { Link } from "react-router-dom";
import Search from "../Components/Search";


const Top: React.FC<{setShowNavbar: any, setShowFooter: any, showSearch: any}> = ({setShowNavbar, setShowFooter, showSearch}) => {
    const [data, setData] = useState<any>('');
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
    

    const onGoingAnime = async () => {
        try {
            const data = await getAnimeRes("top/anime", "limit=25&sfw=true");
            return setData(data);
        } catch (e) {
            console.log(e)
        }
    }
    
    useEffect(() => {
        onGoingAnime()
    }, [])

    return(
        <div className="min-h-screen dark:bg-gray-700 dark:text-gray-200">
            <div className={`p-2 mx-2 md:p-4 lg:p-4 lg:mx-8 text-gray-600 dark:text-gray-200 ${!showSearch ? 'inline' : 'hidden'}`}>
                <h2 className="text-gray-600 font-bold text-2xl pb-5 dark:text-gray-400">Top Anime Series</h2>
                <div className="grid sm:grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-2">
                    {
                        data?.data?.map((dataApi: any, index: number) => {
                            return(
                                <div key={index} className="rounded xl:w-[370px] h-[438px] border border-gray-500 dark:bg-slate-700">
                                    <div className="flex flex-col pt-2">
                                        <div className="flex flex-col justify-center items-center text-xl font-bold text-blue-400 dark:text-white px-4">
                                            <div className="border border-blue-400 dark:border-gray-400 items-center flex px-2">
                                                <span>{index+1}</span>
                                            </div>
                                        </div>
                                        <div className="flex justify-center items-center h-[56px] text-lg font-bold text-black dark:text-blue-400 px-4 hover:dark:text-blue-300">
                                            <Link to={`/anime/${dataApi?.mal_id}`} className="flex justify-center items-center">
                                                {
                                                    dataApi?.title.length >= 50 ?
                                                    <span className="text-center">{dataApi?.title?.slice(0, 50)}...</span>
                                                    :
                                                    <span className="text-center">{dataApi?.title}</span>
                                                }
                                            </Link>
                                        </div>
                                        <div className="flex flex-row text-sm font-medium text-gray-500 dark:text-white gap-2 justify-center py-2 px-4">
                                            <div>
                                                {
                                                    MonthList[dataApi?.aired?.prop?.from?.month] === null || MonthList[dataApi?.aired?.prop?.from?.month] === undefined ?
                                                    <span>? </span>
                                                    :
                                                    <span>{MonthList[dataApi?.aired?.prop?.from?.month]} </span>
                                                }
                                                {
                                                    dataApi?.aired?.prop?.from?.day === null || dataApi?.aired?.prop?.from?.day === undefined ?
                                                    <span>?, </span>
                                                    :
                                                    <span>{dataApi?.aired?.prop?.from?.day}, </span>
                                                }
                                                {
                                                    dataApi?.aired?.prop?.from?.year === null || dataApi?.aired?.prop?.from?.year === undefined ?
                                                    <span>? </span>
                                                    :
                                                    <span>{dataApi?.aired?.prop?.from?.year} </span>
                                                }
                                            </div>
                                            <hr className="border h-[18px]" />
                                            <div>
                                                {
                                                    dataApi?.episodes === null || dataApi?.episodes === undefined ?
                                                    <span></span>
                                                    :
                                                    <span>{dataApi?.episodes} eps,</span>
                                                }
                                            </div>
                                            <div>
                                                {
                                                    dataApi?.duration === null || dataApi?.duration === undefined ?

                                                    <span></span>
                                                    :
                                                    <span>{dataApi?.duration}</span>
                                                }
                                            </div>
                                        </div>
                                        <div className="h-[24px] bg-gray-400 dark:bg-gray-900 py-1">
                                            <div className="flex flex-row text-xs font-normal text-gray-500 dark:text-white gap-2 justify-center">
                                                {
                                                    dataApi?.genres === null || dataApi?.genres === undefined ?
                                                    null
                                                    :
                                                    dataApi?.genres?.map((genre: any, i: number) => {
                                                        return(
                                                            <span key={i} className=" bg-slate-500 rounded-lg text-blue-300 dark:text-gray-300">
                                                                <a className="p-2">{genre?.name}</a>
                                                            </span>
                                                        )
                                                    })
                                                }

                                            </div>
                                        </div>
                                        <div className="flex flex-row text-sm font-normal text-gray-500 dark:text-white gap-2">
                                            <Link to={`/anime/${dataApi?.mal_id}`}>
                                                <img className="w-[170px] h-[240px]" src={dataApi?.images.webp?.large_image_url} width={150} height={300}/>
                                            </Link>
                                            <div className="w-[190px] h-[235px] overflow-hidden hover:overflow-y-scroll flex flex-col gap-1 pt-2">
                                                <div className="text-xs font-light">
                                                    {
                                                        dataApi?.synopsis === null || dataApi?.synopsis === undefined ?
                                                        <span></span>
                                                        :
                                                        <span>
                                                            {
                                                                dataApi.synopsis.length >= 400 ?
                                                                <span>{dataApi.synopsis.slice(0, 400)}...</span>
                                                                :
                                                                dataApi.synopsis
                                                            }
                                                        </span>
                                                    }
                                                </div>
                                                <div className="bg-gray-400 dark:bg-gray-900">
                                                    {
                                                        dataApi?.studios === null || dataApi?.studios === undefined ?
                                                        <span></span>
                                                        :
                                                        <span className="text-black dark:text-gray-200 text-sm font-semibold">Studio :
                                                            <span className=" text-sm font-light">
                                                                {
                                                                    dataApi?.studios.map((studio: any, i: number) => {
                                                                        return(
                                                                            ` ${studio.name}`
                                                                        )
                                                                    }).join(', ')
                                                                }
                                                            </span>
                                                        </span>
                                                    }
                                                </div>
                                                <div>
                                                    {
                                                        dataApi?.source === null || dataApi?.source === undefined ?
                                                        <span></span>
                                                        :
                                                        <span className="text-black dark:text-gray-200">Source : {dataApi.source}</span>
                                                    }
                                                </div>
                                                <div className="bg-gray-400 dark:bg-gray-900">
                                                    {
                                                        dataApi?.themes === null || dataApi?.themes === undefined ?
                                                        <span></span>
                                                        :
                                                        <span className="text-black dark:text-gray-200 text-sm font-semibold">Themes :
                                                            <span className=" text-sm font-light">
                                                                {
                                                                    dataApi?.themes.map((theme: any, i: number) => {
                                                                        return(
                                                                            ` ${theme.name}`
                                                                        )
                                                                    }).join(', ')
                                                                }
                                                            </span>
                                                        </span>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-row justify-center text-black dark:text-gray-200  bg-gray-400 dark:bg-gray-800 h-[45px] items-center rounded-b">

                                            <div className="w-[100px] text-center flex flex-row gap-1">
                                                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                                    <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
                                                </svg>
                                                {
                                                    dataApi?.score === null || dataApi?.score === undefined ?
                                                    <span></span>
                                                    :
                                                    <span>
                                                        {
                                                            dataApi?.score
                                                        }
                                                    </span>
                                                }
                                            </div>
                                            <div className="w-[100px] text-center flex flex-row gap-1">
                                                <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                                    <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd"/>
                                                </svg>

                                                {
                                                    dataApi?.members === null || dataApi?.members === undefined ?
                                                    <span></span>
                                                    :
                                                    <span>
                                                        {
                                                            dataApi?.members
                                                        }
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Search showSearch={showSearch} />
        </div>
    )
}

export default Top;