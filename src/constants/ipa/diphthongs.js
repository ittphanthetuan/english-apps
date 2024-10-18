const Video1 = '/assets/videos/ipa/diphthongs/1_ie.mov';
const Video2 = '/assets/videos/ipa/diphthongs/2_ea.mov';
const Video3 = '/assets/videos/ipa/diphthongs/3_ue.mov';
const Video4 = '/assets/videos/ipa/diphthongs/4_au.mov';
const Video5 = '/assets/videos/ipa/diphthongs/5_eu.mov';
const Video6 = '/assets/videos/ipa/diphthongs/6_ei.mov';
const Video7 = '/assets/videos/ipa/diphthongs/7_ai.mov';
const Video8 = '/assets/videos/ipa/diphthongs/8_oi.mov';
import { getURLAudio } from './helpers';

const diphthongs = [
  {
    label: 'ɪə',
    video: Video1,
    listVoca: [
      {
        label: 'near',
        pronun: '/nɪə(r)/',
        audio: getURLAudio('/vi/media/english/us_pron/n/nea/near_/near.mp3')
      }
    ]
  },
  {
    label: 'eə',
    video: Video2,
    listVoca: [
      {
        label: 'hair',
        pronun: '/heə(r)/',
        audio: getURLAudio('/vi/media/english/us_pron/h/hai/hair_/hair.mp3')
      }
    ]
  },
  {
    label: 'ʊə',
    video: Video3,
    listVoca: [
      {
        label: 'pure',
        pronun: '/pjʊə(r)/',
        audio: getURLAudio('/vi/media/english/us_pron/p/pur/pure_/pure.mp3')
      }
    ]
  },
  {
    label: 'aʊ',
    video: Video4,
    listVoca: [
      {
        label: 'now',
        pronun: '/naʊ/',
        audio: getURLAudio('/vi/media/english/us_pron/n/now/now__/now.mp3')
      }
    ]
  },
  {
    label: 'əʊ',
    video: Video5,
    listVoca: [
      {
        label: 'go',
        pronun: '/ɡəʊ/',
        audio: getURLAudio('/vi/media/english/us_pron/g/go_/go___/go.mp3')
      }
    ]
  },
  {
    label: 'eɪ',
    video: Video6,
    listVoca: [
      {
        label: 'say',
        pronun: '/seɪ/',
        audio: getURLAudio('/vi/media/english/us_pron/s/say/say__/say.mp3')
      }
    ]
  },
  {
    label: 'aɪ',
    video: Video7,
    listVoca: [
      {
        label: 'my',
        pronun: '/maɪ/',
        audio: getURLAudio('/vi/media/english/us_pron/m/my_/my___/my.mp3')
      }
    ]
  },
  {
    label: 'ɔɪ',
    video: Video8,
    listVoca: [
      {
        label: 'boy',
        pronun: '/bɔɪ/',
        audio: getURLAudio('/vi/media/english/us_pron/b/boy/boy__/boy.mp3')
      }
    ]
  }
]

export default diphthongs;
