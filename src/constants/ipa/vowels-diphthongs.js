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
    order: 5,
    video: Video1,
    listVoca: [
      {
        label: 'H<u>ere</u>',
        pronun: '/hɪr/',
        audio: getURLAudio('/vi/media/english/us_pron/h/hea/hear_/hear.mp3')
      },
      {
        label: 'near',
        pronun: '/nɪə(r)/',
        audio: getURLAudio('/vi/media/english/us_pron/n/nea/near_/near.mp3')
      }
    ]
  },
  {
    label: 'eɪ',
    order: 6,
    video: Video6,
    youtubeVideos: [
      'XOuD6mFr6sQ'
    ],
    listVoca: [
      {
        label: 'wait',
        pronun: '/weɪt/',
        audio: getURLAudio('/vi/media/english/us_pron/w/wai/wait_/wait.mp3')
      },
      {
        label: 'say',
        pronun: '/seɪ/',
        audio: getURLAudio('/vi/media/english/us_pron/s/say/say__/say.mp3')
      }
    ]
  },
  {
    label: 'ʊə',
    order: 11,
    video: Video3,
    listVoca: [
      {
        label: 'T<u>our</u>ist',
        pronun: '/ˈtʊr.ɪst/',
        audio: getURLAudio('/vi/media/english/us_pron/t/tou/touri/tourist.mp3')
      },
      {
        label: 'pure',
        pronun: '/pjʊə(r)/',
        audio: getURLAudio('/vi/media/english/us_pron/p/pur/pure_/pure.mp3')
      }
    ]
  },
  {
    label: 'ɔɪ',
    order: 12,
    video: Video8,
    youtubeVideos: [
      '3cdSvIuTxLY'
    ],
    listVoca: [
      {
        label: 'b<u>oy</u>',
        pronun: '/bɔɪ/',
        audio: getURLAudio('/vi/media/english/us_pron/b/boy/boy__/boy.mp3')
      }
    ]
  },
  {
    label: 'əʊ',
    order: 13,
    video: Video5,
    youtubeVideos: [
      'Civ7UBZP99M',
    ],
    listVoca: [
      {
        label: 'Sh<u>ow</u>',
        pronun: '/ʃoʊ/',
        audio: getURLAudio('/vi/media/english/us_pron/g/go_/go___/go.mp3')
      },
      {
        label: 'go',
        pronun: '/ɡəʊ/',
        audio: getURLAudio('/vi/media/english/us_pron/g/go_/go___/go.mp3')
      }
    ]
  },
  {
    label: 'eə',
    order: 18,
    video: Video2,
    listVoca: [
      {
        label: 'h<u>air</u>',
        pronun: '/heə(r)/',
        audio: getURLAudio('/vi/media/english/us_pron/h/hai/hair_/hair.mp3')
      }
    ]
  },
  {
    label: 'aɪ',
    order: 19,
    video: Video7,
    youtubeVideos: [
      'rbQtAWNFy2I'
    ],
    listVoca: [
      {
        label: 'M<u>y</u>',
        pronun: '/maɪ/',
        audio: getURLAudio('/vi/media/english/us_pron/m/my_/my___/my.mp3')
      }
    ]
  },
  {
    label: 'aʊ',
    order: 20,
    video: Video4,
    youtubeVideos: [
      'i8KThVR713Q'
    ],
    listVoca: [
      {
        label: 'C<u>ow</u>', // wrong if also be now
        pronun: '/kaʊ/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cow/cow__/cow.mp3')
      },
      {
        label: 'now',
        pronun: '/naʊ/',
        audio: getURLAudio('/vi/media/english/us_pron/n/now/now__/now.mp3')
      }
    ]
  },
]

export default diphthongs;
