

const PicturesAnime: React.FC<{pictures: any}> = ({pictures}) => {
    return(
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center">
            {
                pictures?.data?.map((pic: any, index: number) => {
                    return(
                        <div key={index} className="lg:h-[400px]">
                            <img src={pic?.webp?.large_image_url} className="w-[240px] h-[350px] rounded-xl border-2 border-gray-600 hover:scale-105 hover:border-2 hover:border-blue-400 hover:duration-500"/>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default PicturesAnime;