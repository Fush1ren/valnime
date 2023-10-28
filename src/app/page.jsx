import MyAnimeList from "@/components/MyAnimeList"
import Header from "@/components/MyAnimeList/Header"
import { getAnimeRes } from "./lib/api-lib"

const Home = async () => {

  const topAnime = await getAnimeRes("top/anime", "limit=10")

  return (
    <div>
      <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <MyAnimeList api={topAnime}/>
      </section>
    </div>
  )
}

export default Home