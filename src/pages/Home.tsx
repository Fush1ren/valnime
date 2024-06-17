import { Link } from "react-router-dom";
import CardAnime from "../Components/CardAnime";
import { getAnimeRes } from "../lib/api_lib";
import { useEffect, useLayoutEffect, useState } from "react";
import Search from "../Components/Search";

const Home: React.FC<{setShowNavbar: any, setShowFooter: any, showSearch: any}> = ({setShowNavbar, setShowFooter, showSearch}) => {
    const [data, setData] = useState<any>('');
    const [dataSeason, setDataSeason] = useState<any>('');

    useLayoutEffect(() => {
        setShowNavbar(true);
        setShowFooter(true);
    }, [])


    const onGoingAnime = async () => {
        try {
            const data = await getAnimeRes("top/anime", "limit=10&sfw=true");
            return setData(data);
        } catch (e) {
            console.log(e)
        }
    }

    const animeSeason = async () => {
        try {
            const datas = await getAnimeRes("seasons/now", "limit=10&sfw=true");
            return setDataSeason(datas);
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            onGoingAnime()
            animeSeason()
        }, 1000)

        return () => clearTimeout(timer)
    }, [])


    return(
        <div className="h-full min-h-screen bg-white dark:bg-gray-700 dark:text-gray-200">
            <div className={` ${!showSearch ? 'inline' : 'hidden'} h-full`}>
                <div>
                    <div className="px-2 lg:px-10 pt-10 flex flex-row items-baseline justify-between">
                        <h2 className="text-xl font-bold text-black dark:text-gray-200">Seasons Now</h2>
                        <h2 className="text-lg font-medium dark:text-gray-200 underline hover:text-blue-500">
                            <Link to={"/anime/seasons/now"}>
                                More
                            </Link>
                        </h2>
                    </div>
                    <CardAnime api={dataSeason} />
                </div>
                <div>
                    <div className="px-2 lg:px-10 pt-10 flex flex-row items-baseline justify-between">
                        <h2 className="text-xl font-bold text-black dark:text-gray-200">Top Anime</h2>
                        <h2 className="text-lg font-medium dark:text-gray-200 underline hover:text-blue-500">
                            <Link to={"/top"}>
                                More
                            </Link>
                        </h2>
                    </div>
                    <CardAnime api={data} />
                </div>
            </div>
            <Search showSearch={showSearch} />
        </div>
    )
}

export default Home;