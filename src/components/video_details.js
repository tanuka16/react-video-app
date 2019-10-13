import React from 'react';
//instead of passdown the props everytime, just replace props attribute with video
const VideoDetail = ({video}) =>{

  if (!video){
    return <h1>Loading....</h1>
  }

  const videoId = video.id.videoId;
  const url= 'https://www.youtube.com/embed/' + videoId;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>

      <div className="detail">
        <div>{video.snippet.title}</div>
        <div>video.snippet.description}</div>
      </div>
    </div>
  )
}
export default VideoDetail;
