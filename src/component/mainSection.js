import React from 'react';
import './mainSection.css';
import '../App.css';


function mainSection() {

  return (
    <>
    <div className='main-container'>
      <video src='/videos/WeddingBackground.mp4' autoPlay loop muted />

      <h2>㊗️福您们  白头到老 永结同❤️</h2>

      <img src='https://res.cloudinary.com/dp8rfxspl/image/upload/v1604647458/mainImage_dqih51.jpg' alt='text' />
      <div>
      <audio src='/audios/CanonInD.mpeg' controls autoPlay loop />

      </div>

    </div>
    </>
  )
}

export default mainSection
