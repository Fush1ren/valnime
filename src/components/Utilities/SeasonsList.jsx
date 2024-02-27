const SeasonsList = ({ seasonNowTitle, setPage }) => {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const handleFirstPage = () => {
        setPage(0)
        scrollTop()
    }
    
    return(
        <div>
            <h1>{seasonNowTitle}</h1>
        </div>
    )
}

export default SeasonsList;