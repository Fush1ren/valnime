import { Link } from "react-router-dom";

interface CardAnimeProps {
    api: {
      data: {
        mal_id: number;
        images: {
          webp: {
            image_url: string;
            large_image_url: string;
          };
        };
        title: string;
      }[];
    };
}


const CardAnime: React.FC<CardAnimeProps> = ({ api }) => {
    return (
        <div className="px-2 py-5 lg:p-10 text-black min-h-[676px]">
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
                {
                    api.data?.map((datas, index) => {
                        return (
                            <Link to={`/anime/${datas?.mal_id}`} key={index} className=" box-border relative group duration-500 cursor-pointer group overflow-hidden hover:relative text-gray-50 h-56 lg:h-72 lg:w-56 rounded-2xl border-black dark:border-blue-200 border-2 hover:duration-700 hover:scale-105 shadow-lg">
                                <div className=" h-44">
                                    <div className=" h-full text-gray-800">
                                        <img src={datas?.images.webp?.large_image_url} className=" lg:w-full object-cover" width={180} height={200} alt="anime" />
                                    </div>
                                    <div className="absolute bg-gray-500 dark:bg-black bg-opacity-80 dark:bg-opacity-75 -bottom-[70px] w-full h-28 p-2 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 text-center">

                                        {
                                            datas.title.length < 50 ?
                                                <span className="text-white dark:text-blue-500 font-bold text-lg">{datas.title}</span>
                                                :
                                                <span className="text-white dark:text-blue-500 font-bold text-lg">{datas.title.slice(0, 50)}</span>
                                        }

                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CardAnime;