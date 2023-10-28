import { getAnimeRes } from "@/app/lib/api-lib"
import MyAnimeList from "@/components/MyAnimeList"
import Header from "@/components/MyAnimeList/Header"

const Search = async ({ params }) => {
    const { keyword } = params
    const decodedKeyword = decodeURI(keyword)
    
    const searchAnime = await getAnimeRes("anime",`q=${decodedKeyword}`)

    return (
        <div>
        <section>
            <Header title={`Hasil Pencarian dari ${decodedKeyword}...`} />
            <MyAnimeList api={searchAnime}/>
        </section>
        </div>
    )
}

export default Search;