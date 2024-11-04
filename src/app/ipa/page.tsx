"use client"
import { useState, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Volume2 } from 'lucide-react'
import styles from './styles.module.css'
import { allIPA } from '../../constants/ipa/utils'
import { Video } from '../../components/video'
import { RecordVoice } from '@/components/record-voice/record-voice'

const itemBreak = [6, 13, 20, 28, 36]
const itemHasBorderTop = [1, 2, 3, 4, 5, 6, 13, 21, 22, 23, 24, 25, 26, 27, 28]
const itemHasBorderLeft = [1, 7, 14, 21, 29, 37]
const itemHasBorderRight = [4, 6, 10, 13, 17, 20, 24, 28, 32, 36, 40, 44]
const itemHasBorderBottom = [37, 38, 39, 40, 41, 42, 43, 44]

function PageIPA() {
  const [showVideo, setShowVideo] = useState(false);
  const [indexActive, setItemActive] = useState(0);
  const videosRef = useRef<any[]>([])
  const audioRef = useRef<any[]>([])

  const getIndexRandom = () => {
    return Math.floor(Math.random() * allIPA.length)
  };

  const changeIndex = (idx?: number) => {
    if (idx !== undefined) {
      playCurrentVideo(idx);
      return setItemActive(idx);
    }

    return setItemActive(getIndexRandom());
  };

  const playCurrentVideo = (idx?: number) => {
    const indexVideo = idx !== undefined ? idx : indexActive
    videosRef.current[indexVideo] && videosRef.current[indexVideo].play()
    
  }

  return (
    <div className='max-w-[1100px] m-auto'>
      <div className='mb-5'>
        <RecordVoice />
      </div>
      <div className='flex justify-center items-center'>
        <div className='inline-block w-[688px] relative'>
          <ul className='list-voca list-none absolute right-full top-0 pr-5'>
            {allIPA[indexActive].listVoca.map((text: any) => (
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
                  <span>{text.pronun}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className={`flex flex-wrap`}>
            {allIPA.map((item, idx) => {
              let ipaItemClasses = `relative text-black bg-white flex items-center justify-center w-[85px] h-[75px] border-b-[1px] border-l-[1px] border-orange-600 border-solid`;

              if (indexActive === idx) {
                ipaItemClasses += ` ${styles['active']}`
              }
              if (item.order === 13 ) {
                ipaItemClasses += ` ${styles['item-ipa-13']}`
              }
              if (itemHasBorderTop.includes(item.order)) {
                ipaItemClasses += ' border-t-[5px]'
              }
              if (itemHasBorderLeft.includes(item.order)) {
                ipaItemClasses += ' border-l-[5px]'
              }
              if (itemHasBorderRight.includes(item.order)) {
                ipaItemClasses += ' border-r-[5px]'
              }
              if (itemHasBorderBottom.includes(item.order)) {
                ipaItemClasses += ' border-b-[5px]'
              }
              const arrElm = [
                <button key={item.label} className={`${styles['item-ipa']} ${ipaItemClasses}`} onClick={() => changeIndex(idx)}>
                  <span className='z-10 absolute left-[2px] top-[2px] text-[10px]'>{item.order}</span>
                  <div className='flex flex-col justify-between z-10 h-full py-1'>
                    <div className='text-[25px] font-bold'>{item.label}</div>
                    <div className='text-[12px]' dangerouslySetInnerHTML={{ __html: item.listVoca[0].label }} />
                  </div>
                </button>
              ]
              if (itemBreak.includes(item.order)) {
                arrElm.push(<div className='line-beak w-full' />)
              }
              return arrElm
            })}
          </div>
        </div>
      </div>
      <div className='block text-center'>
        <Button onClick={() => setShowVideo(!showVideo)} className='my-4'>Show video</Button>
        <div className={`${showVideo ? 'block' : 'hidden'} flex justify-center flex-wrap`}>
            {allIPA.map((item, i) => {
              const isShow = item.video === allIPA[indexActive].video;
              return (
                <div key={item.video} className={`flex justify-center ${isShow ? 'visible relative' : 'invisible absolute'}`}>
                  <div className='w-[700px]'>
                    <Video src={item.video} ref={(el) => { videosRef.current[i] = el; }} isShow={item.video === allIPA[indexActive].video} />
                  </div>
                </div>
              )
            })}
            {allIPA[indexActive].youtubeVideos && (
              allIPA[indexActive].youtubeVideos.map((idVideo) => (
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${idVideo}?si=0vqYeW2DZrJ_H5L_`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              ))
            )}
        </div>
        <div>
          Pronounce -ed verb endings: https://www.youtube.com/watch?v=A7hi-ipU2n0&list=PL9BkrMCNEjRvaPNCY5w5LeEZto7FD0Xn4&index=34
        </div>
      </div>
    </div>
  )
}

export default PageIPA
