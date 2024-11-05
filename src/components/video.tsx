import React, { useEffect, useRef } from 'react';
// import Wrapper from './Wrapper';

const VideoCom = (props: any) => {
  const { src, isShow, innerRef } = props;
  const myRef = useRef(null)

  useEffect(() => {
    // myRef.current.play()
  }, [])

  return (
    <div className={`video`}>
      <video
        controls
        // ref={myRef}
        ref={innerRef}
        width='100%'
      >
        <source src={src} type='video/mp4' />
      </video>
    </div>
  )
}
export const Video = React.forwardRef((props: any, ref) => <VideoCom {...props} innerRef={ref} />);