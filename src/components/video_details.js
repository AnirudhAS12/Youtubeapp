import React from 'react';

const VideoDetails = (props) =>{
  if(!props.video){
    return(<div> Loading... </div>);
  }
   
   const videoId = props.video.id.videoId;
   const url = `www.youtube.com/embed/${videoId}`;

   return(
     <div>
     <div className="video-detail col-md-8">
     <div className="embed-responsive embed-responsive-16by9">
     <iframe className="embed-responsive-item" src={url} /> 
     </div>
     <div className="details">
     <div>{props.video.snippet.detail}</div>
     <div>{props.video.snippet.description}</div>
     
     </div>
      </div>
     </div>

   );
}

export default VideoDetails;