import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .item-ipa {
    display: block;
    text-transform: none;
    box-sizing: border-box;
    margin: 5px;
    width: 50px;
    min-width: auto;
    padding: 2px 0;
    font-size: 18px;
    cursor: pointer;

    &.active {
      color: red;
    }
  }
`;

export default Wrapper;
