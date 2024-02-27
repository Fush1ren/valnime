const New = async () => {
    const api = await fetch("https://api.jikan.moe/v4/seasons/now")
    const res = await api.json()
    console.log(res.data)
    return(
        <div>
            NEW
        </div>
    )
}

export default New;