import React from 'react';

export default function Video() {
  return (
    <div className="body_video">
      {/* <div className="full-screen"> */}
      <div className="full-screen__body">
        <div className="full-screen__title"> АПТЭКО</div>
        <div className="full-screen__text">Бахнем и пойдём?</div>
      </div>
      <video poster="video/preVideo.png" autoPlay muted loop preload="auto" className="full-screen__video">
        <source type="video/mp4" src="/video/intro.webm" />
      </video>
    </div>
  // </div>

  );
}
