import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import consonants from './constants/consonants';
import diphthongs from './constants/diphthongs';
import vowels from './constants/vowels';
import Button from '@mui/material/Button';
import Video from 'components/Video';
import ListIPA from 'components/ListIPA';

const getIndex = () => Math.floor(Math.random() * data.length);
const data = [
  ...vowels.map(item => ({ ...item, type: 'vowels' })),
  ...diphthongs.map(item => ({ ...item, type: 'diphthongs' })),
  ...consonants.map(item => ({ ...item, type: 'consonants' }))
]


function IPA() {
  const [itemData, setItemData] = useState(data[getIndex()]);
  const [index, setIndex] = useState(getIndex());

  const changeIndex = (payload) => {
    if (payload !== undefined) {
      setItemData({ ...data[payload] });

      return setIndex(payload);
    }
    const dataIndex = getIndex();
    console.log(dataIndex, "dataIndex");
    setItemData({ ...data[dataIndex] });
    return setIndex(dataIndex);
  };

  const dataFilter = [
    {
      label: "vowels",
      data: data.filter((i) => i.type === "vowels")
    },
    {
      label: "diphthongs",
      data: data.filter((i) => i.type === "diphthongs")
    },
    {
      label: "consonants",
      data: data.filter((i) => i.type === "consonants")
    }
  ];

  return (
    <div className="App">
      <Video src={itemData.video} />
      <Stack spacing={2} direction="row">
        <Button variant="contained" size="small" onClick={() => changeIndex()}>Change</Button>
        <Button variant="contained" size="small" onClick={() => changeIndex(index)}>Reload</Button>
      </Stack>
      
      <div className="box-top">
        <div className="left-box">
          <h1>{itemData.title}</h1>
          {itemData.link && (
            <h3>
              <a href={itemData.video} key={itemData.video}>
                Link
              </a>
            </h3>
          )}
          <ul>
            {itemData.listVoca.map((text) => (
              <li key={text.pronun}>
                <h2>{text.label}</h2>
                <h3>{text.pronun}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {dataFilter.map((mydata) => (
        <>
          <h3>{mydata.label}</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              width: "100%"
            }}
          >
          <ListIPA
            list={mydata.data}
            data={data}
            currentItem={itemData}
            changeIndex={changeIndex}
          />
          </div>
        </>
      ))}
    </div>
  );
}

export default IPA;
