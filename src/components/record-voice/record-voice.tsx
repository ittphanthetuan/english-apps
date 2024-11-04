"use client"
import { useEffect, useState } from 'react'
import { Mic } from "lucide-react"
import styles from "./styles.module.css"

let recoder: any = null

export function RecordVoice() {
  const [isRecording, setIsRecording] = useState(false)
  const [audioURL, setAudioURL] = useState("")
  // var context = window && new (window.AudioContext)();
  
  useEffect(() => {
    // setUpAudio()
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
    if (!isRecording) {
      setUpAudio()
      setIsRecording(true)
    } else {
      recoder.stop()
      setIsRecording(false)
    }

  }

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex flex-col items-center'>
        <button onClick={toggleMic} className={`flex justify-center items-center ${styles['mic-toggle']} ${isRecording && styles['is-recording']}`}>
          <Mic size={64} />
        </button>
        <audio src={audioURL} className='playback' controls></audio>
      </div>
    </div>
  )
}

