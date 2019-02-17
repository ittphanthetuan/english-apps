import styled from 'styled-components';

const BoxInfoWrapper = styled.div`
  margin-bottom: 50px;
  overflow: hidden;

  .title-page {
    text-align: center;
  }

  .name-info {
    font-size: 28px;
    margin: 0;
    color: #0e2452;
  }

  .position-info {
    font-size: 16px;
    color: #9197a3;
    margin: 0;
  }

  .list-info {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 5px 0;
      width: 50%;
      float: left;
    }

    strong {
      display: inline-block;
      min-width: 150px;
      font-size: 14px;
    }
  }
`;

export default BoxInfoWrapper;