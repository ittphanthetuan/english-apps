import React from 'react';
import Wrapper from './Wrapper';

const Video = (props) => {
  const { src } = props;
  return (
    <Wrapper className='video'>
      <video
        controls
        width='100%'
        key={src}
      >
        <source src={src} type='video/mp4' />
      </video>
    </Wrapper>
  )
}

export default Video;