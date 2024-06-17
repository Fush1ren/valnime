import { useEffect, useLayoutEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { getAnimeRes } from "../lib/api_lib";


const Navbar: React.FC<{setShowSearch: any}> = ({setShowSearch}) =>{
    const [query, setQuery] = useState('');
    const [showResults, setShowResults] = useState(false);
    const [searchValue, setSearchValue] = useState<any>('');
    const [data, setData] = useState<any>('');

    const [isOpen, setIsOpen] = useState(false);

    const toggleSearch = () => {
      setIsOpen(!isOpen);
    };

    useLayoutEffect(() => {
        setShowSearch(isOpen)
    }, [isOpen])
  

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchValue(value);
        setQuery(value);
        if (value) {
            setShowResults(true);
        } else {
            setShowResults(false);
        }
    };

    const getData = async () => {
        try{
            const searchAnime = await getAnimeRes("anime", `q=${searchValue}&sfw=true`)
            const dataApi = searchAnime?.data?.map((value: any) => value);
            setData(dataApi)
        } catch (e: any) {
            console.log(e);
        }
    }

    useEffect(() => {
        if(!searchValue) return;
        let timer = setTimeout(() => {
            getData();
        }, 1000)

        return () => clearTimeout(timer)
        
    }, [searchValue])


    return(
        <nav className=" border-gray-200 bg-blue-500 dark:bg-gray-900 text-white">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-xl font-bold lg:px-6">
                    VALNIME
                </a>
                <div className="flex items-center gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse lg:px-2 text-black">
                    <div className="hidden lg:flex relative w-[150px] xl:w-[300px] h-[40px]">
                        <input
                        type="text"
                        value={query}
                        onChange={handleChange}
                        placeholder="Search..."
                        className="w-full h-[40px] p-2 border border-gray-300 rounded-md text-sm"
                        />
                        {showResults && (
                        <div className="absolute left-0 right-0 mt-12 h-[235px] bg-white border border-gray-300 rounded shadow-lg z-10 overflow-hidden hover:overflow-y-scroll">
                            {data?.length > 0 ? (
                            data?.map((result: any, index: number) => (
                                <div className="p-px hover:bg-gray-200 h-[90px]" key={index}>
                                    <a href={`/anime/${result?.mal_id}`}
                                    className="cursor-pointer hover:w-[284px] h-[90x] gap-1 hover:z-[99] text-xs font-normal hover:font-semibold"
                                    >
                                        <div className="flex flex-row">
                                            <div>
                                                <img className="w-[70px] h-[90px]" src={result?.images?.webp?.large_image_url} width={90} height={90} />
                                            </div>
                                            <span className="overflow-hidden w-[240px]">{result?.title}</span>
                                        </div>
                                    </a>
                                </div>
                            ))
                            ) : (
                            <div className="p-2 text-gray-500">No results found</div>
                            )}
                        </div>
                        )}
                    </div>
                    <ThemeSwitcher />
                    <button onClick={toggleSearch} className="block lg:hidden">
                        <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;