const Pagination = ({ page, lastPage, setPage }) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleFirstPage = () => {
        setPage(1)
        scrollTop()
    }

    const handlePrevPage = () => {
        setPage((prevState) => prevState - 1)
        scrollTop()
    }

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
        scrollTop()
    }

    const handleLastPage = () => {
        setPage(lastPage)
        scrollTop()
    }

    return(
        <div className="flex justify-center items-center pt-4 pb-8 px-2 gap-4 text-white md:text-xl text-base">
            { page <= 1 ? null :
                <button onClick={handlePrevPage} className="transition-all hover:text-indigo-400">Prev</button>
            }
            { page === 1 ? null :
                <button onClick={handleFirstPage} className="transition-all hover:text-indigo-400">First Page</button>
            }
            
            <p>{page} of {lastPage}</p>
            
            { page === lastPage ? null :
                <button onClick={handleLastPage} className="transition-all hover:text-indigo-400">Last Page</button>
            }

            { page >= lastPage ? null :
                <button onClick={handleNextPage} className="transition-all hover:text-indigo-400">Next</button>
            }

        </div>
    )
}

export default Pagination;