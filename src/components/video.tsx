import React from 'react';
// import Wrapper from './Wrapper';

const VideoCom = (props: any) => {
  const { src, isShow, innerRef } = props;

  return (
    <div className={`video`}>
      <video
        controls
        ref={innerRef}
        width='100%'
      >
        <source src={src} type='video/mp4' />
      </video>
    </div>
  )
}
export const Video = React.forwardRef((props: any, ref) => <VideoCom {...props} innerRef={ref} />);