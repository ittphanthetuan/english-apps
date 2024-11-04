"use client"
import React, { useState, useRef, useEffect } from 'react';
import { Volume2 } from 'lucide-react'
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
// import Stack from '@mui/material/Stack';
import consonants from '@/constants/ipa/consonants';
import diphthongs from '@/constants/ipa/vowels-diphthongs';
import vowels from '@/constants/ipa/vowels-monophthongs';
import { Video } from '@/components/video';
import { ListIPA } from '@/components/list-ipa';
// import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
// import MuiAccordion from '@mui/material/Accordion';
// import MuiAccordionSummary from '@mui/material/AccordionSummary';
// import MuiAccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import { IconButton } from '@mui/material'
// import Icon from '@mui/material/Icon';
// import Logo from '@/assets/images/Untitled.png';
// import VideoTest from '@/assets/videos/ipa/consonants/2_f.mov';
// import VideoTest2 from '../assets/videos/ipa/2_f.mov';
// import { list } from '@vercel/blob';
import { Label } from '@/components/ui/label';

const data = [
  ...vowels.map(item => ({ ...item, type: 'vowels' })),
  ...diphthongs.map(item => ({ ...item, type: 'diphthongs' })),
  ...consonants.map(item => ({ ...item, type: 'consonants' }))
]

export default function Home() {
  const [itemData, setItemData] = useState(data[0]);
  const [showVideo, setShowVideo] = useState(false);
  const [index, setIndex] = useState(0);
  const videosRef = useRef<any[]>([])
  const audioRef = useRef<any[]>([])

  useEffect(() => {

  }, [])

  const getIndexRandom = () => {
    return Math.floor(Math.random() * data.length)
  };

  const indexRandom = getIndexRandom()

  const changeIndex = (payload?: any) => {
    if (payload !== undefined) {
      playCurrentVideo(payload);
      setItemData({ ...data[payload] });
      return setIndex(payload);
    }
    const dataIndex = getIndexRandom();
    setItemData({ ...data[dataIndex] });
    return setIndex(dataIndex);
  };

  const playCurrentVideo = (idx?: number) => {
    const indexVideo = idx !== undefined ? idx : index
    videosRef.current[indexVideo] && videosRef.current[indexVideo].play()
    
  }

  const dataFilter: any = [
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
        { label: 'Unvoiced', data: data.filter((i: any) => i.type === "consonants" && i.cat === 'unvoiced') },
        { label: 'Voiced', data: data.filter((i: any) => i.type === "consonants" && i.cat === 'voiced') }
      ],
      length: consonants.length
    }
  ];

  return (
    <div className="App">
      <Button onClick={() => setShowVideo(!showVideo)}>Show video</Button>
      <div className={`${showVideo ? 'block' : 'hidden'}`}>
        <div>
          {data.map((item, i) => {
            const isShow = item.video === itemData.video;
            return (
              <div key={item.video} className={`flex justify-center ${isShow ? 'visible relative' : 'invisible absolute'}`}>
                <div className='w-[700px]'>
                  <Video src={item.video} ref={(el) => { videosRef.current[i] = el; }} isShow={item.video === itemData.video} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className='flex mt-2 gap-1'>
        <Button onClick={() => playCurrentVideo()}>Play</Button>
        <Button onClick={() => changeIndex()}>Change</Button>
        <Button onClick={() => changeIndex(index)}>Reload</Button>
      </div>
      
      <div className="box-top">
        <div className="left-box">
          <h1><span dangerouslySetInnerHTML={{ __html: itemData.title }}></span></h1>
          {itemData.link && (
            <h3>
              <a href={itemData.video} key={itemData.video}>
                Link
              </a>
            </h3>
          )}
          <ul className='list-voca list-none'>
            {itemData.listVoca.map((text: any) => (
              <li key={text.label}>
                <h2 className='font-bold' dangerouslySetInnerHTML={{ __html: text.label }} />
                <div className='mt-2 flex flex-row'>
                  {text.audio && (
                    <div>
                      <Button variant='ghost' className='rounded-full w-8 h-8 mr-2' onClick={() => { audioRef.current[text.label].play() }}>
                        <Volume2 />
                      </Button>
                      <audio controls ref={ref => audioRef.current[text.label] = ref} style={{ display: 'none' }}>
                        <source src={text.audio} type="audio/mpeg" />
                      </audio>
                    </div>
                  )}
                  {text.pronun}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        {dataFilter.map((mydata: any) => (
          <div key={mydata.label} className='flex  flex-col gap-2'>
            <h3>{mydata.label} ({mydata.length})</h3>
            <div className='flex flex-wrap w-full gap-2' >
              {mydata.label === 'consonants' ? (
                mydata.data.map((subMyData: any) => (
                  <div key={subMyData.label} className='flex w-full flex-col gap-2'>
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
          </div>
        ))}
      </div>
    </div>
  );
}
