import Video1 from 'assets/ipa/diphthongs/1_ie.mov';
import Video2 from 'assets/ipa/diphthongs/2_ea.mov';
import Video3 from 'assets/ipa/diphthongs/3_ue.mov';
import Video4 from 'assets/ipa/diphthongs/4_au.mov';
import Video5 from 'assets/ipa/diphthongs/5_eu.mov';
import Video6 from 'assets/ipa/diphthongs/6_ei.mov';
import Video7 from 'assets/ipa/diphthongs/7_ai.mov';
import Video8 from 'assets/ipa/diphthongs/8_oi.mov';
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
