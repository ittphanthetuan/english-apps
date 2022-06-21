import React from 'react';
import Wrapper from './Wrapper';

const ListIPA = (props) => {
  const { list, data, currentItem, changeIndex } = props;
  return (
    <Wrapper className='list-ipa'>
      {list.map(item => {
        const isEqual = item.label === currentItem.label;
        return (
          <div
            key={item.label}
            onClick={() =>
              changeIndex(data.findIndex((i) => i.label === item.label))
            }
            className={`item-ipa ${isEqual ? 'active': ''}`}
          >
            {item.label}
          </div>
        )
      })}
      
    </Wrapper>
  )
}

export default ListIPA;