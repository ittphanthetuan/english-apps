import React, { useEffect, useRef } from 'react';
import Wrapper from './Wrapper';

const Video = (props) => {
  const { src, isShow, innerRef } = props;
  const refVideo = useRef(null);

  useEffect(() => {
    // console.log(refVideo, 'refVideo')
    if (refVideo.current && isShow) {
      refVideo.current.play()
    }
  }, [isShow])

  return (
    <Wrapper className={`video ${isShow ? 'is-show': ''}`}>
      <video
        controls
        ref={(ref) => {
          // console.log(innerRef, 'innerRef')
          refVideo.current = ref
          innerRef(ref)
        }}
        width='100%'
        key={src}
      >
        <source src={src} type='video/mp4' />
      </video>
    </Wrapper>
  )
}
export default React.forwardRef((props, ref) => <Video {...props} innerRef={ref} />);