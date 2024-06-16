import Stats from "./Stats";
import Player from "./Player";

const Details: React.FC<{data: any}> = ({data}) => {
    return(
        <span>
            <Player url={data?.trailer?.embed_url} />
            <Stats data={data} />
            <span className="text-black dark:text-gray-300 text-justify py-4 flex flex-col">
                <span className="font-bold text-lg dark:text-gray-400">Synopsis</span>
                {
                    data?.synopsis
                }
            </span>
        </span>
        
    )
}


export default Details;