import MyAnimeList from "@/components/MyAnimeList"
import Header from "@/components/MyAnimeList/Header"
import { getAnimeRes } from "../lib/api-lib"
import TopAiringAnime from "@/components/MyAnimeList/TopAiring"

const Home = async () => {

  //const topAnime = await getAnimeRes("top/anime", "limit=10")
  const topAiring = await getAnimeRes("top/anime", "filter=airing&sfw=true")
  const SeasonNow = await getAnimeRes("seasons/now", "limit=5")
  return (
    <div className="">
      <section className="pb-2">
        <Header title="Top Airing Anime"/>
        <TopAiringAnime api={topAiring} />
      </section>
      <section className="pb-4">
        <Header title={`${SeasonNow.data[0]?.season.charAt(0).toUpperCase() + SeasonNow.data[0]?.season.slice(1)} ${SeasonNow.data[0]?.year} Anime`} 
          linkTitle="Lihat Semua" linkHref="/anime/season" 
        />
        <MyAnimeList api={SeasonNow} />
      </section>
      {/* <section>
        <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
        <MyAnimeList api={topAnime}/>
      </section> */}
    </div>
  )
}

export default Home