import React from 'react'

const VideoContainer = ({videoId}) => {
 
  return (
    <div className='absolute w-screen h-screen  top-0 z-[-1]'>
      <iframe className=' w-full h-full aspect-video' src={`https://www.youtube.com/embed/${videoId}?playlist=${videoId}&loop=1&autoplay=1&mute=1&loop=1&controls=0`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoContainer