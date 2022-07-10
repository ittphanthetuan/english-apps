import styled from 'styled-components';

const Wrapper = styled.div`
  display: none;
  max-width: 600px;
  margin: 0 auto;

  &.is-show {
    display: block;
  }
`;

export default Wrapper;
