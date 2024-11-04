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
    label: 'iː',
    video: Video2,
    youtubeVideos: [
      'C5WKc4R7mD4'
    ],
    order: 1,
    listVoca: [
      {
        label: 'Sh<u>ee</u>p',
        pronun: '/ʃiːp/',
        audio: getURLAudio('/vi/media/english/us_pron/s/she/sheep/sheep.mp3')
      },
      {
        label: 'see',
        pronun: '/siː/',
        audio: getURLAudio('/vi/media/english/us_pron/c/c__/c____/c.mp3')
      }
    ]
  },
  {
    label: 'i',
    order: 2,
    video: Video1,
    youtubeVideos: [
      '-km81q6DIlM'
    ],
    listVoca: [
      {
        label: 'Sh<u>i</u>p',
        pronun: '/ʃɪp/',
        audio: getURLAudio('/vi/media/english/us_pron/s/shi/ship_/ship.mp3')
      },
      {
        label: 'happy',
        pronun: '/ˈhæpi/',
        audio: getURLAudio('/vi/media/english/us_pron/h/hap/happy/happy.mp3')
      }
    ]
  },
  {
    label: 'ʊ',
    order: 3,
    video: Video3,
    youtubeVideos: [
      'phlnzlzCPqE'
    ],
    listVoca: [
      {
        label: 'G<u>oo</u>d',
        pronun: '/ɡʊd/',
        audio: getURLAudio('/vi/media/english/us_pron/g/goo/good_/good.mp3')
      },
      {
        label: 'put',
        pronun: '/pʊt/',
        audio: getURLAudio('/vi/media/english/us_pron/p/put/put__/put.mp3')
      }
    ]
  },
  {
    label: 'uː',
    order: 4,
    video: Video4,
    youtubeVideos: [
      'IwahymIkGJ0',
    ],
    listVoca: [
      {
        label: 'Sh<u>oo</u>t',
        pronun: '/ʃuːt/',
        audio: getURLAudio('/vi/media/english/us_pron/c/chu/chute/chute.mp3')
      },
      {
        label: 'too',
        pronun: '/tuː/',
        audio: getURLAudio('/vi/media/english/us_pron/t/to_/to___/to.mp3')
      }
    ]
  },
  {
    label: 'e',
    order: 7,
    video: Video5,
    youtubeVideos: [
      'xKxV8XfigaE'
    ],
    listVoca: [
      {
        label: 'b<u>e</u>d',
        pronun: '/bed/',
        audio: getURLAudio('/vi/media/english/us_pron/b/bed/bed__/bed.mp3')
      }
    ]
  },
  {
    label: 'ə',
    order: 8,
    video: Video6,
    youtubeVideos: [
      '2BmkUa4Mv60'
    ],
    listVoca: [
      {
        label: 'Teach<u>er</u>',
        pronun: '/ˈtiː.tʃɚ/',
        audio: getURLAudio('/vi/media/english/us_pron/t/tea/teach/teacher.mp3')
      },
      {
        label: 'about',
        pronun: '/əˈbaʊt/',
        audio: getURLAudio('/vi/media/english/us_pron/a/abo/about/about.mp3')
      }
    ]
  },
  {
    label: 'ɜː',
    order: 9,
    video: Video7,
    youtubeVideos: [
      'Ehn6XixUBKs'
    ],
    listVoca: [
      {
        label: 'B<u>ir</u>d',
        pronun: '/bɝːd/',
        audio: getURLAudio('/vi/media/english/us_pron/b/bir/bird_/bird.mp3')
      },
      {
        label: 'fur',
        pronun: '/fɜː(r)/',
        audio: getURLAudio('/vi/media/english/us_pron/f/fur/fur__/fur.mp3')
      }
    ]
  },
  {
    label: 'ɔː',
    order: 10,
    video: Video8,
    youtubeVideos: [
      'opMab62SybY'
    ],
    listVoca: [
      {
        label: 'D<u>oo</u>r',
        pronun: '/dɔːr/',
        audio: getURLAudio('/vi/media/english/us_pron/d/doo/door_/door.mp3')
      },
      {
        label: 'saw',
        pronun: '/sɔː/',
        audio: getURLAudio('/vi/media/english/us_pron/s/saw/saw__/saw.mp3')
      }
    ]
  },
  {
    label: 'æ',
    order: 14,
    video: Video9,
    youtubeVideos: [
      '-i7-DDAW-ok'
    ],
    listVoca: [
      {
        label: 'c<u>a</u>t',
        pronun: '/kæt/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cat/cat__/cat.mp3')
      }
    ]
  },
  {
    label: 'ʌ',
    order: 15,
    video: Video10,
    youtubeVideos: [
      '_63fTgbG-yQ'
    ],
    listVoca: [
      {
        label: '<u>U</u>p',
        pronun: '/ʌp/',
        audio: getURLAudio('/vi/media/english/us_pron/u/up_/up___/up.mp3')
      },
      {
        label: 'cup',
        pronun: '/kʌp/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cup/cup__/cup.mp3')
      },
      {
        label: 'butter',
        pronun: '/ˈbʌt̬.ɚ/',
        audio: getURLAudio('/vi/media/english/us_pron/b/but/butte/butter.mp3')
      }
    ]
  },
  {
    label: 'ɑː',
    order: 16,
    video: Video11,
    youtubeVideos: [
      'DEJGBC4xZzI'
    ],
    listVoca: [
      {
        label: 'F<u>ar</u>',
        pronun: '/fɑːr/',
        audio: getURLAudio('/vi/media/english/us_pron/f/far/far__/far.mp3')
      },
      {
        label: 'father',
        pronun: '/ˈfɑːðə(r)/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cdo/cdo03/cdo0318usfath1774.mp3')
      }
    ]
  },
  {
    label: 'ɒ',
    order: 17,
    video: Video12,
    listVoca: [
      {
        label: '<u>O</u>n',
        pronun: '/ɡɒt/',
        audio: getURLAudio('/vi/media/english/us_pron/e/eus/eus73/eus73326.mp3')
      },
      {
        label: 'got',
        pronun: '/ɡɒt/',
        audio: getURLAudio('/vi/media/english/us_pron/g/got/got__/got.mp3')
      }
    ]
  }
]

export default vowels;
