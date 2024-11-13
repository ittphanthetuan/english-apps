"use client"
import { useEffect, useState, useRef } from 'react'
import { Mic } from "lucide-react"
import styles from "./styles.module.css"
import _ from 'lodash'

let recoder: any = null

export function RecordVoice() {
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState("")
  const refAudio = useRef<any>(null)
  // var context = window && new (window.AudioContext)();
  
  useEffect(() => {
    // setUpAudio()
    const handleKeyDown = (e) => {
      if (e.code === 'KeyQ') {
        e.preventDefault();
        toggleMic(); // Sử dụng toggleMic với hàm callback
      }
      if (e.code === 'KeyW') {
        if (refAudio.current.duration > 0 && !refAudio.current.paused) {
          refAudio.current.pause()
        } else {
          refAudio.current.play()
        }
      }
      
    };
    document.addEventListener('keydown', handleKeyDown)
  }, [])

  const setUpStream = (stream: any) => {
    recoder = new MediaRecorder(stream)
    // initAudio(stream)
    // recoder.removeEventListener()
    const chunks: any = []

    recoder.ondataavailable = (e: any) => {
      chunks.push(e.data)
    }
    recoder.onstop = (e: any) => {
      const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" })
      const audioURL = window.URL.createObjectURL(blob);
      setAudioURL(audioURL)
      stream.getTracks().forEach((track: any) => {
        console.log(track, 'track')
        track.stop()
      });
    }
    recoder.start()
  }

//   const initAudio = (stream: any) => {
//     let compressor = context.createDynamicsCompressor();
//     compressor.threshold.value = -50;
//     compressor.knee.value = 40;
//     compressor.ratio.value = 12;
//     compressor.reduction.value = -20;
//     compressor.attack.value = 0;
//     compressor.release.value = 0.25;

//     let filter = context.createBiquadFilter();
//     filter.Q.value = 8.30;
//     filter.frequency.value = 355;
//     filter.gain.value = 3.0;
//     filter.type = 'bandpass';
//     filter.connect(compressor);


//     compressor.connect(context.destination)
//     filter.connect(context.destination)

//     let mediaStreamSource = context.createMediaStreamSource( stream );
//     mediaStreamSource.connect( filter );
// }

  const setUpAudio = () => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        audio: true
      }).then(setUpStream)
      .catch(err => {
        console.log(err)
      })
    }
  }

  const toggleMic = () => {
    setIsRecording(isRecording => {
      if (!isRecording) setUpAudio()
      else recoder.stop()
      return !isRecording
    })
  }

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex flex-col items-center'>
        <button onClick={toggleMic} className={`flex justify-center items-center ${styles['mic-toggle']} ${isRecording && styles['is-recording']}`}>
          <Mic size={64} />
        </button>
        <div>Q: record / stop record; W: play / pause</div>
        <audio ref={refAudio} src={audioURL} className='playback' controls></audio>
      </div>
    </div>
  )
}

