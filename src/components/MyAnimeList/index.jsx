import Image from "next/image";
import Link from "next/link";

const MyAnimeList = ({ api }) => {
    return(
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4"> 
        {api.data?.map((anime, index) => {
            const title = anime.title.replaceAll(" ", "_").replaceAll(":","_")
            return(
                <Link href={`/anime/${anime.mal_id}/${title}`} className="cursor-pointer text-white hover:text-indigo-400 transition-all text-center" key={index}>
                    <Image className="card w-full max-h-72 object-cover rounded-lg" src={anime.images?.webp?.image_url} priority={true} alt="..." width={350} height={350} />
                    <h3 className="md:text-lg text-md pt-2">{anime.title}</h3>
                </Link>
            )
        })}
        </div>
    )
}

export default MyAnimeList;