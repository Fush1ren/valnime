import ReactPlayer from 'react-player/lazy'

const Player: React.FC<{url: string}> = ({url}) => {
    return(
        <div className='p-2 pb-4 w-full flex justify-center'>
            {
                url === null || url === undefined ?
                <iframe className='w-[640px] h-[360px]' src='https://youtube.com/watch?'/>
                :
                <iframe className='w-[640px] h-[360px]' src={url} />
            }
            {/* <ReactPlayer 
                url={url}
                controls={true}
            /> */}
        </div>
    )
}

export default Player;