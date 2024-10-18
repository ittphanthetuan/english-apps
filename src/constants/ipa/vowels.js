const Video1 = '/assets/videos/ipa/vowels/1_i.mov';
const Video2 = '/assets/videos/ipa/vowels/2_i;.mov';
const Video3 = '/assets/videos/ipa/vowels/3_u.mov';
const Video4 = '/assets/videos/ipa/vowels/4_u;.mov';
const Video5 = '/assets/videos/ipa/vowels/5_e.mov';
const Video6 = '/assets/videos/ipa/vowels/6_ee.mov';
const Video7 = '/assets/videos/ipa/vowels/7_e;.mov';
const Video8 = '/assets/videos/ipa/vowels/8_o;.mov';
const Video9 = '/assets/videos/ipa/vowels/9_ae.mov';
const Video10 = '/assets/videos/ipa/vowels/10_a.mov';
const Video11 = '/assets/videos/ipa/vowels/11_a;.mov';
const Video12 = '/assets/videos/ipa/vowels/12_o.mov';

import { getURLAudio } from './helpers';

const vowels = [
  {
    label: 'i',
    video: Video1,
    listVoca: [
      {
        label: 'happy',
        pronun: '/ˈhæpi/',
        audio: getURLAudio('/vi/media/english/us_pron/h/hap/happy/happy.mp3')
      }
    ]
  },
  {
    label: 'iː',
    video: Video2,
    listVoca: [
      {
        label: 'see',
        pronun: '/siː/',
        audio: getURLAudio('/vi/media/english/us_pron/c/c__/c____/c.mp3')
      }
    ]
  },
  {
    label: 'ʊ',
    video: Video3,
    listVoca: [
      {
        label: 'put',
        pronun: '/pʊt/',
        audio: getURLAudio('/vi/media/english/us_pron/p/put/put__/put.mp3')
      }
    ]
  },
  {
    label: 'uː',
    video: Video4,
    listVoca: [
      {
        label: 'too',
        pronun: '/tuː/',
        audio: getURLAudio('/vi/media/english/us_pron/t/to_/to___/to.mp3')
      }
    ]
  },
  {
    label: 'e',
    video: Video5,
    listVoca: [
      {
        label: 'bed',
        pronun: '/bed/',
        audio: getURLAudio('/vi/media/english/us_pron/b/bed/bed__/bed.mp3')
      }
    ]
  },
  {
    label: 'ə',
    video: Video6,
    listVoca: [
      {
        label: 'about',
        pronun: '/əˈbaʊt/',
        audio: getURLAudio('/vi/media/english/us_pron/a/abo/about/about.mp3')
      }
    ]
  },
  {
    label: 'ɜː',
    video: Video7,
    listVoca: [
      {
        label: 'fur',
        pronun: '/fɜː(r)/',
        audio: getURLAudio('/vi/media/english/us_pron/f/fur/fur__/fur.mp3')
      }
    ]
  },
  {
    label: 'ɔː',
    video: Video8,
    listVoca: [
      {
        label: 'saw',
        pronun: '/sɔː/',
        audio: getURLAudio('/vi/media/english/us_pron/s/saw/saw__/saw.mp3')
      }
    ]
  },
  {
    label: 'æ',
    video: Video9,
    listVoca: [
      {
        label: 'cat',
        pronun: '/kæt/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cat/cat__/cat.mp3')
      }
    ]
  },
  {
    label: 'ʌ',
    video: Video10,
    listVoca: [
      {
        label: 'cup',
        pronun: '/kʌp/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cup/cup__/cup.mp3')
      }
    ]
  },
  {
    label: 'ɑː',
    video: Video11,
    listVoca: [
      {
        label: 'father',
        pronun: '/ˈfɑːðə(r)/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cdo/cdo03/cdo0318usfath1774.mp3')
      }
    ]
  },
  {
    label: 'ɒ',
    video: Video12,
    listVoca: [
      {
        label: 'got',
        pronun: '/ɡɒt/',
        audio: getURLAudio('/vi/media/english/us_pron/g/got/got__/got.mp3')
      }
    ]
  }
]

export default vowels;
