const Pagination: React.FC<{page: any, lastPage: any, setPage: any}> = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleFirstPage = () => {
        setPage(1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState: any) => prevState - 1)
        scrollTop()
    }

    const handleNextPage = () => {
        setPage((prevState: any) => prevState + 1)
        scrollTop()
    }

    const handleLastPage = () => {
        setPage(lastPage)
        scrollTop()
    }

    return(
        <div className="flex justify-center items-center py-4 px-2 gap-8 text-blue-500 dark:text-white md:text-xl text-base">
            { page === 1 ?
                 <button className="transition-all text-gray-600 opacity-30 dark:text-gray-400" disabled={true}>First Page</button>
                :
                <button onClick={handleFirstPage} className="transition-all hover:text-indigo-400">First Page</button>
            }
            { page <= 1 ? 
                <button className="transition-all text-gray-600 opacity-30 dark:text-gray-400" disabled={true}>Prev</button>
                :
                <button onClick={handlePrevPage} className="transition-all hover:text-indigo-400">Prev</button>
            }
            
            <p>{page} of {lastPage}</p>
            
            { page >= lastPage ? 
                <button className="transition-all text-gray-600 opacity-30 dark:text-gray-400" disabled={true}>Next</button>
                :
                <button onClick={handleNextPage} className="transition-all hover:text-indigo-400">Next</button>
            }
            { page === lastPage ?
                <button className="transition-all text-gray-600 opacity-30 dark:text-gray-400" disabled={true}>Last Page</button>
                :
                <button onClick={handleLastPage} className="transition-all hover:text-indigo-400">Last Page</button>
            }


        </div>
    )
}

export default Pagination;