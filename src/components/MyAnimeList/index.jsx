import Image from "next/image";
import Link from "next/link";

const MyAnimeList = ({ api }) => {
    return(
        <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 px-4"> 
        {api.data?.map((anime, index) => {
            const Titlespace = anime.title.replaceAll(' ', '_')
            const title = Titlespace.replaceAll(':', "_")
            return(
                <Link href={`/anime/${anime.mal_id}/${title}`} className="cursor-pointer text-white hover:text-indigo-400 transition-all" key={index}>
                    <Image className="w-full max-h-64 object-cover" src={anime.images.webp.image_url} priority={true} alt="..." width={350} height={350} />
                    <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
                </Link>
            )
        })}
        </div>
    )
}

export default MyAnimeList;
