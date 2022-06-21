import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .item-ipa {
    display: block;
    box-sizing: border-box;
    width: 50px;
    padding: 10px 0;
    font-size: 22px;
    cursor: pointer;

    &.active {
      color: red;
      font-weight: bold;
    }
  }
`;

export default Wrapper;
