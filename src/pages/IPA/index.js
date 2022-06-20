import React, { useState } from 'react';
import consonants from './constants/consonants';
import diphthongs from './constants/diphthongs';
import vowels from './constants/vowels';

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
  const renderVideo = () => {
    if (itemData.video) {
      return (
        <video
          controls
          width="100%"
          key={`${itemData.video}${itemData.label}${getIndex()}`}
        >
          {/* <source src="/media/cc0-videos/flower.webm" type="video/webm" /> */}

          <source
            src={`${itemData.video}`}
            type="video/mp4"
          />
        </video>
      );
    }
  };
  return (
    <div className="App">
      {renderVideo()}
      <a
        href="https://drive.google.com/drive/folders/1Blhq_r-kp3iLEnie6S0Vwn8tyl1CW9Rb"
        target="_blank"
        rel="noreferrer"
      >
        link
      </a>
      <span>{data.length}</span>
      <button onClick={() => changeIndex()}>change</button>
      <button onClick={() => changeIndex(index)}>reload</button>
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
        <div className="right-box">{}</div>
      </div>
      {console.log(dataFilter, 'dataFilter')}
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
            {mydata.data.map((text, indexText) => {
              const style = {
                display: "flex",
                flexBasis: "50px",
                padding: "10px 0",
                fontSize: "22px",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              };
              const isEqual = text.label === itemData.label;
              if (isEqual) {
                style.color = "red";
                style.fontWeight = "bold";
              }
              return (
                <div
                  key={mydata.video}
                  onClick={() =>
                    changeIndex(data.findIndex((i) => i.label === text.label))
                  }
                  style={style}
                >
                  {text.label}
                </div>
              );
            })}
          </div>
        </>
      ))}
    </div>
  );
}

export default IPA;
