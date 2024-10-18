import React from 'react';
import Wrapper from './Wrapper';

const VideoCom = (props) => {
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
export const Video = React.forwardRef((props, ref) => <VideoCom {...props} innerRef={ref} />);
Video.displayName = Video