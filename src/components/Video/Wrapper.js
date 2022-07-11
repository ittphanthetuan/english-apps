import styled from 'styled-components';

const Wrapper = styled.div`
  visibility: hidden;
  position: absolute;
  max-width: 600px;
  margin: 0 auto;

  &.is-show {
    visibility: visible;
    position: relative;
  }
`;

export default Wrapper;
