
const Stats: React.FC<{data: any}> = ({data}) => {

    return(
        <span className="pt-2 grid grid-cols-2 lg:grid-cols-4 rounded-lg shadow-md dark:shadow-xl bg-gray-50 dark:bg-transparent text-black dark:text-gray-400 p-4 gap-2 lg:gap-10 justify-center">
            <span className="w-28 text-center">
                <span className="flex flex-col px-2">
                    <span className="bg-blue-400 text-white text-sm rounded">Score</span>
                    <span className="text-lg font-bold dark:text-gray-300">{data?.score}</span>
                    <span className="text-sm">{data?.scored_by} users</span>
                </span>
            </span>
            <span className="flex flex-col text-center w-28 justify-center">
                <span className="text-lg">Ranked</span>
                <span className="text-lg font-bold text-gray-600 dark:text-gray-300">#{data?.rank}</span>
            </span>
            <span className="flex flex-col text-center w-28 justify-center">
                <span className="text-lg">Popularity</span>
                <span className="text-lg font-bold text-gray-600 dark:text-gray-300">#{data?.popularity}</span>
            </span>
            <span className="flex flex-col text-center w-28 justify-center">
                <span className="text-lg">Members</span>
                <span className="text-lg font-bold text-gray-600 dark:text-gray-300">{data?.members}</span>
            </span>
        </span>
    )
}

export default Stats;