import React from 'react';

export default function Video() {
  return (

    <div className="full-screen">
      <div className="full-screen__body">
        <div className="full-screen__title"> АПТЭКО</div>
        <div className="full-screen__text">Лекарства - это супер!</div>
      </div>
      <video poster="video/preVideo.png" autoPlay muted loop preload="auto" className="full-screen__video">
        <source type="video/mp4" src="/video/video2.mp4" />
      </video>
    </div>

  );
}
