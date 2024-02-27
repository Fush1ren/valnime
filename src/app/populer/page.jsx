"use client"

import MyAnimeList from "@/components/MyAnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeRes } from "@/lib/api-lib";

const Populer = () => {
    const [page, setPage] = useState(1)
    const [topAnime, setTopAnime] = useState([])

    const fetchData = async () => {
        const populerAnime = await getAnimeRes("top/anime",`page=${page}`)
        setTopAnime(populerAnime)
    }

    useEffect(() => {
       fetchData() 
    }, [page])


    return(
        <div>
            <HeaderMenu title={"Anime Populer"} />
            <Pagination page={page} lastPage={topAnime.pagination?.last_visible_page} setPage={setPage} />
            <MyAnimeList api={topAnime} />
        </div>
    )
}

export default Populer;