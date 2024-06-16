export const getAnimeRes = async ( resource: string, query?: string ) : Promise<any> => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getNestedAnimeRes = async(resource: string, objProp: string) : Promise<any> => {
    const response = await getAnimeRes(resource) 
    return response.data.flatMap((item:any) => item.voice_actors)
}