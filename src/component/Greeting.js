import React from 'react'
import ReactPlayer from 'react-player';

function Greeting(props) {
  return (
    <>
      <li className='cards__item'>

        <div className='cards__item__link'>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            {/* <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            /> */}
             {/* <video className ='cards__item__img'  controls="true" preload="yes" >
               <source src='/videos/ParentsGreetings.mp4' type='video/mp4'/>
              </video> */}
              <ReactPlayer className ='cards__item__img'  url={props.url} />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </div>

      </li>
    </>
  )
}

export default Greeting
