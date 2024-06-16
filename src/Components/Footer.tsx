

const Footer:React.FC = () => {
    const scrollTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }


    return(
        <div className="bg-blue-400 dark:bg-gray-600">
            <div className="py-5 px-8 dark:text-gray-400 flex flex-row items-center justify-between">
                <a href={'/'} className="text-lg font-bold">VALNIME</a>
                <button onClick={scrollTop} className="rounded-full border dark:border-gray-400 hover:scale-90">
                    <svg className="w-6 h-6 text-gray-800 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v13m0-13 4 4m-4-4-4 4"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Footer;