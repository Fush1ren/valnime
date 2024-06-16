

const TableAnime: React.FC<{ data: any }> = ({ data }) => {
    return (
        <div>
            <h2 className="font-semibold">Characters & Voice Actors</h2>
            {
                data?.data?.map((char: any, index: number) => {
                    return (
                        <table key={index} className="w-full border-y solid border-gray-500">
                            <tbody>
                                <tr>
                                    <td className="w-[50px] py-2 align-top">
                                        <div className=" w-[54px] h-[84px]">
                                            <img className="w-[54px] h-[84px]" src={char?.character?.images?.webp?.image_url} />
                                        </div>
                                    </td>
                                    <td className="w-[280px] align-top p-1 text-base">
                                        <div className="p-1">
                                            <h3 className="text-gray-600 dark:text-blue-400">{char?.character?.name}</h3>
                                        </div>
                                        <div className="p-1">
                                            <h3 className="text-gray-400 dark:text-white">{char?.role}</h3>
                                        </div>
                                    </td>
                                    <td className="py-2">
                                        <table className="text-right float-right">
                                            {
                                                char?.voice_actors?.map((va: any, i: number) => {
                                                    return (
                                                        <tbody key={i}>
                                                            <tr>
                                                                <td>
                                                                    <div>
                                                                        <a className="text-gray-600 dark:text-blue-400">{va?.person?.name}</a>
                                                                    </div>
                                                                    <div>
                                                                        <a className="text-gray-400 dark:text-white">{va?.language}</a>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className=" w-[60px] h-[84px]">
                                                                        <img className=" w-[54px] h-[80px]" src={va?.person?.images?.jpg?.image_url} />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    )
                                                })
                                            }
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })
            }
        </div>
    )
}

export default TableAnime;