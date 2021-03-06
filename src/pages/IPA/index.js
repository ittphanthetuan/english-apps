import React, { useState, useRef, useEffect } from 'react';
import Stack from '@mui/material/Stack';
import consonants from './constants/consonants';
import diphthongs from './constants/diphthongs';
import vowels from './constants/vowels';
import Button from '@mui/material/Button';
import Video from 'components/Video';
import ListIPA from 'components/ListIPA';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material'
import Icon from '@mui/material/Icon';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: '20px',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const getIndexRandom = () => Math.floor(Math.random() * data.length);
const data = [
  ...vowels.map(item => ({ ...item, type: 'vowels' })),
  ...diphthongs.map(item => ({ ...item, type: 'diphthongs' })),
  ...consonants.map(item => ({ ...item, type: 'consonants' }))
]


function IPA() {
  const [itemData, setItemData] = useState(data[getIndexRandom()]);
  const [index, setIndex] = useState(getIndexRandom());
  const videosRef = useRef([])
  const audioRef = useRef(null)

  const [expanded, setExpanded] = React.useState('');
  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };


  const changeIndex = (payload) => {
    if (payload !== undefined) {
      playCurrentVideo(payload);
      setItemData({ ...data[payload] });
      return setIndex(payload);
    }
    const dataIndex = getIndexRandom();
    setItemData({ ...data[dataIndex] });
    return setIndex(dataIndex);
  };

  const playCurrentVideo = (idx) => {
    const indexVideo = idx !== undefined ? idx : index
    videosRef.current[indexVideo] && videosRef.current[indexVideo].play()
    
  }

  const dataFilter = [
    {
      label: "vowels",
      data: data.filter((i) => i.type === "vowels"),
      length: vowels.length
    },
    {
      label: "diphthongs",
      data: data.filter((i) => i.type === "diphthongs"),
      length: diphthongs.length
    },
    {
      label: "consonants",
      data: [
        { label: 'Unvoiced', data: data.filter((i) => i.type === "consonants" && i.cat === 'unvoiced') },
        { label: 'Voiced', data: data.filter((i) => i.type === "consonants" && i.cat === 'voiced') }
      ],
      length: consonants.length
    }
  ];

  return (
    <div className="App">
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Video</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {data.map((item, i) => {
            return (
              <>
                <Video key={item.video} src={item.video} ref={(el) => { videosRef.current[i] = el; }} isShow={item.video === itemData.video} />
              </>
            )
          })}
          </AccordionDetails>
      </Accordion>
      
      <Stack spacing={2} direction="row">
        <Button variant="contained" size="small" onClick={() => playCurrentVideo()}>Play</Button>
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
          <ul className='list-voca' style={{ listStyle: 'none' }}>
            {itemData.listVoca.map((text) => (
              <li key={text.pronun}>
                <h2>{text.label}</h2>
                <h3>
                  {text.audio && (
                    <>
                      <IconButton color="primary" size="large" onClick={() => { audioRef.current.play() }}>
                        <Icon>volume_up</Icon>
                      </IconButton>
                      <audio controls ref={audioRef} style={{ display: 'none' }}>
                        <source src={text.audio} type="audio/mpeg" />
                      </audio>
                    </>
                  )}
                  {text.pronun}
                </h3>
                <div></div>
                
              </li>
            ))}
          </ul>
        </div>
      </div>
      {dataFilter.map((mydata) => (
        <>
          <h3>{mydata.label} ({mydata.length})</h3>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              width: "100%"
            }}
          >
            {mydata.label === 'consonants' ? (
              mydata.data.map(subMyData => (
                <div key={subMyData.label} style={{ display: 'block', width: '100%' }}>
                  <h4>- {subMyData.label}</h4>
                    <ListIPA
                      list={subMyData.data}
                      data={data}
                      currentItem={itemData}
                      changeIndex={changeIndex}
                    />
                </div>
              ))
            ) : (
              <ListIPA
                list={mydata.data}
                data={data}
                currentItem={itemData}
                changeIndex={changeIndex}
              />
            )}
            
          </div>
        </>
      ))}
    </div>
  );
}

export default IPA;
