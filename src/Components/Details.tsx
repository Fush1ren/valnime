import Stats from "./Stats";

const Details: React.FC<{data: any}> = ({data}) => {
    return(
        <span>
            <div className='p-2 pb-4 w-full flex justify-center'>
            {
                data?.trailer?.embed_url === null || data?.trailer?.embed_url === undefined ?
                ''
                :
                <iframe className='w-[640px] h-[360px]' src={data?.trailer?.embed_url} />
            }
        </div>
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