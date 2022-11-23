import React from 'react'
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';


const Videos = () => {
    let { id } = useParams();
    const opts = {
        height: '390',
        width: '640',
      };
  return (
    <div>
      
      <YouTube videoId={id} opts={opts} />

    </div>
  )
}

export default Videos;
