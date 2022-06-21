import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Wrapper from './Wrapper';

const ListIPA = (props) => {
  const { list, data, currentItem, changeIndex } = props;
  return (
    <Wrapper className='list-ipa'>
      {list.map(item => {
        const isEqual = item.label === currentItem.label;
        return (
          <Button
            key={item.label}
            onClick={() => changeIndex(data.findIndex((i) => i.label === item.label))}
            className={`item-ipa ${isEqual ? 'active': ''}`}
            variant="outlined"
            size='medium'
          >
            {item.label}
          </Button>
        )
      })}
    </Wrapper>
  )
}

export default ListIPA;