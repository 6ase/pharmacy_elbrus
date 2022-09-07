import React from 'react';
import setVideoCenter from '../../public/video/video.mp4';

export default function Video() {
  const video = setVideoCenter();
  return (
    <div className="video-box">
      <video autoPlay loop muted controls="">
        <source src="'../../public//video/video.mp4'" type="video/mp4" />
      </video>

      <div className="video-content">
        {video}
      </div>
    </div>
  );
}
