import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import Card from './Card';

export default function Video() {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  return (

    <div className="full-screen">
      <div className="full-screen__body">
        <div className="full-screen__tittle"><h1>Аптека</h1></div>
        <div className="full-screen__text"><h3>Мечты!</h3></div>

      </div>
      <video autoPlay muted loop preload="auto" className="full-screen__video">
        <source type="video/mp4" src="/video/video.mp4" />
      </video>
      <div className="content">
        <div className="content__container" />
        <h2>{lorem.generateParagraphs(7)}</h2>
      </div>
    </div>

  );
}
