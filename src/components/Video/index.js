import React, { useEffect, useRef } from 'react';
import Wrapper from './Wrapper';

const Video = (props) => {
  const { src, isShow, innerRef } = props;

  return (
    <Wrapper className={`video ${isShow ? 'is-show': ''}`}>
      <video
        controls
        ref={innerRef}
        width='100%'
        key={src}
      >
        <source src={src} type='video/mp4' />
      </video>
    </Wrapper>
  )
}
export default React.forwardRef((props, ref) => <Video {...props} innerRef={ref} />);