import React, { useEffect, useRef } from 'react';
import Wrapper from './Wrapper';

const Video = (props) => {
  const { src, isShow } = props;
  const refVideo = useRef(null);

  useEffect(() => {
    if (refVideo.current && isShow) {
      refVideo.current.play()
    }
  }, [isShow])

  return (
    <Wrapper className={`video ${isShow ? 'is-show': ''}`}>
      <video
        controls
        ref={refVideo}
        width='100%'
        key={src}
      >
        <source src={src} type='video/mp4' />
      </video>
    </Wrapper>
  )
}

export default Video;