const Video1 = '/assets/videos/ipa/consonants/1_p.mov';
const Video2 = '/assets/videos/ipa/consonants/2_f.mov';
const Video3 = '/assets/videos/ipa/consonants/3_t.mov';
const Video4 = '/assets/videos/ipa/consonants/4_O-.mov';
const Video5 = '/assets/videos/ipa/consonants/5_tf.mov';
const Video6 = '/assets/videos/ipa/consonants/6_s.mov';
const Video7 = '/assets/videos/ipa/consonants/7_S.mov';
const Video8 = '/assets/videos/ipa/consonants/8_k.mov';
const Video9 = '/assets/videos/ipa/consonants/9_h.mov';
const Video10 = '/assets/videos/ipa/consonants/10_b.mov';
const Video11 = '/assets/videos/ipa/consonants/11_v.mov';
const Video12 = '/assets/videos/ipa/consonants/12_d_.mov';
const Video13 = '/assets/videos/ipa/consonants/13_D.mov';
const Video14 = '/assets/videos/ipa/consonants/14_dz.mov';
const Video15 = '/assets/videos/ipa/consonants/15_z_.mov';
const Video16 = '/assets/videos/ipa/consonants/16_Z.mov';
const Video17 = '/assets/videos/ipa/consonants/17_g.mov';
const Video18 = '/assets/videos/ipa/consonants/18_m.mov';
const Video19 = '/assets/videos/ipa/consonants/19_n.mov';
const Video20 = '/assets/videos/ipa/consonants/20_N.mov';
const Video21 = '/assets/videos/ipa/consonants/21_r.mov';
const Video22 = '/assets/videos/ipa/consonants/22_l.mov';
const Video23 = '/assets/videos/ipa/consonants/23_w.mov';
const Video24 = '/assets/videos/ipa/consonants/24_j.mov';
import { getURLAudio } from './helpers';

const consonants = [
  {
    label: 'p',
    order: 21,
    video: Video1,
    youtubeVideos: [
      'JPUr5MgeDHM'
    ],
    cat: 'unvoiced',
    listVoca: [
      {
        label: '<u>P</u>ea',
        pronun: '/piː/',
        audio: getURLAudio('/vi/media/english/us_pron/p/p__/p____/p.mp3')
      },
      {
        label: 'pen',
        pronun: '/pen/',
        audio: getURLAudio('/vi/media/english/us_pron/p/pen/pen__/pen.mp3')
      }
    ]
  },
  {
    label: 'b',
    order: 22,
    cat: 'voiced',
    video: Video10,
    youtubeVideos: [
      'JPUr5MgeDHM'
    ],
    listVoca: [
      {
        label: '<u>B</u>oat',
        pronun: '/boʊt/',
        audio: getURLAudio('/vi/media/english/us_pron/b/boa/boat_/boat.mp3')
      },
      {
        label: 'bad',
        pronun: '/bæd/',
        audio: getURLAudio('/vi/media/english/us_pron/b/bad/bad__/bad.mp3')
      }
    ]
  },
  { 
    label: 't',
    order: 23,
    video: Video3,
    youtubeVideos: [
      'hGZ9GwrNWmU'
    ],
    cat: 'unvoiced',
    listVoca: [
      {
        label: '<u>T</u>ea',
        pronun: '/tiː/',
        audio: getURLAudio('/vi/media/english/us_pron/t/t__/t____/t.mp3')
      }
    ]
  },
  {
    label: 'd',
    order: 24,
    cat: 'voiced',
    video: Video12,
    youtubeVideos: [
      'hGZ9GwrNWmU'
    ],
    listVoca: [
      {
        label: '<u>D</u>og',
        pronun: '/dɑːɡ/',
        audio: getURLAudio('/vi/media/english/us_pron/d/dog/dog__/dog.mp3')
      },
      {
        label: 'did',
        pronun: '/dɪd/',
        audio: getURLAudio('/vi/media/english/us_pron/d/did/did__/did.mp3')
      }
    ]
  },
  {
    label: 'tʃ',
    order: 25,
    video: Video5,
    youtubeVideos: [
      'aqHebuRjO0k'
    ],
    cat: 'unvoiced',
    listVoca: [
      {
        label: '<u>Ch</u>eese',
        pronun: '/tʃiːz/',
        audio: getURLAudio('/vi/media/english/us_pron/c/che/chees/cheese.mp3')
      },
      {
        label: 'chain',
        pronun: '/tʃeɪn/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cha/chain/chain.mp3')
      }
    ]
  },
  {
    label: 'dʒ',
    order: 26,
    cat: 'voiced',
    video: Video14,
    youtubeVideos: [
      'aqHebuRjO0k'
    ],
    listVoca: [
      {
        label: '<u>J</u>une',
        pronun: '/dʒuːn/',
        audio: getURLAudio('/vi/media/english/us_pron/j/jun/june_/june.mp3')
      },
      {
        label: 'jam',
        pronun: '/dʒæm/',
        audio: getURLAudio('/vi/media/english/us_pron/j/jam/jam__/jam.mp3')
      }
    ]
  },
  {
    label: 'k',
    order: 27,
    cat: 'unvoiced',
    video: Video8,
    youtubeVideos: [
      'O_NisgL1dvY'
    ],
    listVoca: [
      {
        label: '<u>C</u>ar',
        pronun: '/kɑːr/',
        audio: getURLAudio('/vi/media/english/us_pron/c/car/car__/car.mp3')
      },
      {
        label: 'cat',
        pronun: '/kæt/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cat/cat__/cat.mp3')
      }
    ]
  },
  {
    label: 'g',
    order: 28,
    cat: 'voiced',
    video: Video17,
    youtubeVideos: [
      'O_NisgL1dvY'
    ],
    listVoca: [
      {
        label: '<u>G</u>o',
        pronun: '/ɡoʊ/',
        audio: getURLAudio('/vi/media/english/us_pron/g/go_/go___/go.mp3')
      },
      {
        label: 'get',
        pronun: '/ɡet/',
        audio: getURLAudio('/vi/media/english/us_pron/g/get/get__/get.mp3')
      }
    ]
  },
  {
    label: 'f',
    order: 29,
    video: Video2,
    youtubeVideos: [
      'nR-K3mrHFv0'
    ],
    cat: 'unvoiced',
    listVoca: [
      {
        label: '<u>F</u>ly',
        pronun: '/flaɪ/',
        audio: getURLAudio('/vi/media/english/us_pron/f/fly/fly__/fly.mp3')
      },
      {
        label: 'fall',
        pronun: '/fɔːl/',
        audio: getURLAudio('/vi/media/english/us_pron/f/fal/fall_/fall.mp3')
      }
    ]
  },
  {
    label: 'v',
    order: 30,
    cat: 'voiced',
    video: Video11,
    youtubeVideos: [
      'nR-K3mrHFv0'
    ],
    listVoca: [
      {
        label: '<u>V</u>ideo',
        pronun: '/ˈvɪd.i.oʊ/',
        audio: getURLAudio('/vi/media/english/us_pron/v/vid/video/video.mp3')
      },
      {
        label: 'van',
        pronun: '/væn/',
        audio: getURLAudio('/vi/media/english/us_pron/v/van/van__/van.mp3')
      }
    ]
  },
  {
    label: 'θ',
    order: 31,
    video: Video4,
    youtubeVideos: [
      'nlKNo1TGALA'
    ],
    cat: 'unvoiced',
    listVoca: [
      {
        label: '<u>Th</u>ink',
        pronun: '/θɪŋk/',
        audio: getURLAudio('/vi/media/english/us_pron/t/thi/think/think.mp3')
      },
      {
        label: 'Thin',
        pronun: '/θɪn/',
        audio: getURLAudio('/vi/media/english/us_pron/t/thi/thin_/thin.mp3')
      }
    ]
  },
  {
    label: 'ð',
    order: 32,
    cat: 'voiced',
    video: Video13,
    youtubeVideos: [
      'nlKNo1TGALA'
    ],
    listVoca: [
      {
        label: '<u>Th</u>is',
        pronun: '/ðɪs/',
        audio: getURLAudio('/vi/media/english/us_pron/t/thi/this_/this.mp3')
      }
    ]
  },
  {
    label: 's',
    order: 33,
    cat: 'unvoiced',
    video: Video6,
    youtubeVideos: [
      'xl-7mSeybmI'
    ],
    listVoca: [
      {
        label: '<u>S</u>ee',
        pronun: '/siː/',
        audio: getURLAudio('/vi/media/english/us_pron/c/c__/c____/c.mp3')
      }
    ]
  },
  {
    label: 'z',
    order: 34,
    cat: 'voiced',
    youtubeVideos: [
      'xl-7mSeybmI'
    ],
    video: Video15,
    listVoca: [
      {
        label: '<u>Z</u>oo',
        pronun: '/zuː/',
        audio: getURLAudio('/vi/media/english/us_pron/z/zoo/zoo__/zoo.mp3')
      }
    ]
  },
  {
    label: 'ʃ',
    order: 35,
    cat: 'unvoiced',
    video: Video7,
    youtubeVideos: [
      'RxaLKZPPEvY',
    ],
    listVoca: [
      {
        label: '<u>Sh</u>all',
        pronun: '/ʃæl/',
        audio: getURLAudio('/vi/media/english/us_pron/s/sha/shall/shall.mp3')
      },
      {
        label: 'shoe',
        pronun: '/ʃuː/',
        audio: getURLAudio('/vi/media/english/us_pron/s/sho/shoe_/shoe.mp3')
      }
    ]
  },
  {
    label: 'ʒ',
    order: 36,
    cat: 'voiced',
    video: Video16,
    youtubeVideos: [
      'RxaLKZPPEvY',
    ],
    listVoca: [
      {
        label: 'Televi<u>si</u>on',
        pronun: '/ˈtel.ə.vɪʒ.ən/',
        audio: getURLAudio('/vi/media/english/us_pron/t/tel/telev/television.mp3')
      },
      {
        label: 'vision',
        pronun: '/ˈvɪʒn/',
        audio: getURLAudio('/vi/media/english/us_pron/v/vis/visio/vision.mp3')
      }
    ]
  },
  {
    label: 'm',
    order: 37,
    cat: 'voiced',
    video: Video18,
    youtubeVideos: [
      'CoEh8cz-mS4'
    ],
    listVoca: [
      {
        label: '<u>M</u>an',
        pronun: '/mæn/',
        audio: getURLAudio('/vi/media/english/us_pron/e/eus/eus72/eus72888.mp3')
      }
    ]
  },
  {
    label: 'n',
    order: 38,
    cat: 'voiced',
    video: Video19,
    youtubeVideos: [
      'HeMzjC672OA'
    ],
    listVoca: [
      {
        label: '<u>N</u>ow',
        pronun: '/naʊ/',
        audio: getURLAudio('/vi/media/english/us_pron/n/now/now__/now.mp3')
      }
    ]
  },
  {
    label: 'ŋ',
    order: 39,
    cat: 'voiced',
    video: Video20,
    youtubeVideos: [
      '6ESY7ueSfrc'
    ],
    listVoca: [
      {
        label: 'si<u>ng</u>',
        pronun: '/sɪŋ/',
        audio: getURLAudio('/vi/media/english/us_pron/s/sin/sing_/sing.mp3')
      }
    ]
  },
  {
    label: 'h',
    order: 40,
    cat: 'unvoiced',
    video: Video9,
    youtubeVideos: [
      'uOG-4ZjR7ic'
    ],
    listVoca: [
      {
        label: '<u>H</u>at',
        pronun: '/hæt/',
        audio: getURLAudio('/vi/media/english/us_pron/h/hat/hat__/hat.mp3')
      }
    ]
  },
  {
    label: 'l',
    order: 41,
    cat: 'voiced',
    video: Video22,
    youtubeVideos: [
      'FP0jHNoFqWo'
    ],
    listVoca: [
      {
        label: '<u>L</u>ove',
        pronun: '/lʌv/',
        audio: getURLAudio('/vi/media/english/us_pron/l/lov/love_/love.mp3')
      },
      {
        label: 'leg',
        pronun: '/leɡ/',
        audio: getURLAudio('/vi/media/english/us_pron/l/leg/leg__/leg.mp3')
      }
    ]
  },
  {
    label: 'r',
    order: 42,
    cat: 'voiced',
    video: Video21,
    youtubeVideos: [
      'G_OQjKLvt0E'
    ],
    listVoca: [
      {
        label: '<u>R</u>ed',
        pronun: '/red/',
        audio: getURLAudio('/vi/media/english/us_pron/r/rea/read_/read_read.mp3')
      }
    ]
  },
  {
    label: 'w',
    order: 43,
    cat: 'voiced',
    video: Video23,
    youtubeVideos: [
      'RW94L6606DE'
    ],
    listVoca: [
      {
        label: 'wet',
        pronun: '/<u>W</u>et/',
        audio: getURLAudio('/vi/media/english/us_pron/w/wet/wet__/wet.mp3')
      }
    ]

  },
  {
    label: 'j',
    order: 44,
    cat: 'voiced',
    video: Video24,
    youtubeVideos: [
      '1Yo4BHIIBP8'
    ],
    listVoca: [
      {
        label: '<u>Y</u>es',
        pronun: '/jes/',
        audio: getURLAudio('/vi/media/english/us_pron/y/yes/yes__/yes.mp3')
      }
    ]
  }
]

export default consonants;
