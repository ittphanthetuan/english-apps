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
    video: Video1,
    cat: 'unvoiced',
    listVoca: [
      {
        label: 'pen',
        pronun: '/pen/',
        audio: getURLAudio('/vi/media/english/us_pron/p/pen/pen__/pen.mp3')
      }
    ]
  },
  {
    label: 'f',
    video: Video2,
    cat: 'unvoiced',
    listVoca: [
      {
        label: 'fall',
        pronun: '/fɔːl/',
        audio: getURLAudio('/vi/media/english/us_pron/f/fal/fall_/fall.mp3')
      }
    ]
  },
  { 
    label: 't',
    video: Video3,
    cat: 'unvoiced',
    listVoca: [
      {
        label: 'tea',
        pronun: '/tiː/',
        audio: getURLAudio('/vi/media/english/us_pron/t/t__/t____/t.mp3')
      }
    ]
  },
  {
    label: 'θ',
    video: Video4,
    cat: 'unvoiced',
    listVoca: [
      {
        label: 'thin',
        pronun: '/θɪn/',
        audio: getURLAudio('/vi/media/english/us_pron/t/thi/thin_/thin.mp3')
      }
    ]
  },
  {
    label: 'tʃ',
    video: Video5,
    cat: 'unvoiced',
    listVoca: [
      {
        label: 'chain',
        pronun: '/tʃeɪn/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cha/chain/chain.mp3')
      }
    ]
  },
  {
    label: 's',
    cat: 'unvoiced',
    video: Video6,
    listVoca: [
      {
        label: 'see',
        pronun: '/siː/',
        audio: getURLAudio('/vi/media/english/us_pron/c/c__/c____/c.mp3')
      }
    ]
  },
  {
    label: 'ʃ',
    cat: 'unvoiced',
    video: Video7,
    listVoca: [
      {
        label: 'shoe',
        pronun: '/ʃuː/',
        audio: getURLAudio('/vi/media/english/us_pron/s/sho/shoe_/shoe.mp3')
      }
    ]
  },
  {
    label: 'k',
    cat: 'unvoiced',
    video: Video8,
    listVoca: [
      {
        label: 'cat',
        pronun: '/kæt/',
        audio: getURLAudio('/vi/media/english/us_pron/c/cat/cat__/cat.mp3')
      }
    ]
  },
  {
    label: 'h',
    cat: 'unvoiced',
    video: Video9,
    listVoca: [
      {
        label: 'hat',
        pronun: '/hæt/',
        audio: getURLAudio('/vi/media/english/us_pron/h/hat/hat__/hat.mp3')
      }
    ]
  },
  {
    label: 'b',
    cat: 'voiced',
    video: Video10,
    listVoca: [
      {
        label: 'bad',
        pronun: '/bæd/',
        audio: getURLAudio('/vi/media/english/us_pron/b/bad/bad__/bad.mp3')
      }
    ]
  },
  {
    label: 'v',
    cat: 'voiced',
    video: Video11,
    listVoca: [
      {
        label: 'van',
        pronun: '/væn/',
        audio: getURLAudio('/vi/media/english/us_pron/v/van/van__/van.mp3')
      }
    ]
  },
  {
    label: 'd',
    cat: 'voiced',
    video: Video12,
    listVoca: [
      {
        label: 'did',
        pronun: '/dɪd/',
        audio: getURLAudio('/vi/media/english/us_pron/d/did/did__/did.mp3')
      }
    ]
  },
  {
    label: 'ð',
    cat: 'voiced',
    video: Video13,
    listVoca: [
      {
        label: 'this',
        pronun: '/ðɪs/',
        audio: getURLAudio('/vi/media/english/us_pron/t/thi/this_/this.mp3')
      }
    ]
  },
  {
    label: 'dʒ',
    cat: 'voiced',
    video: Video14,
    listVoca: [
      {
        label: 'jam',
        pronun: '/dʒæm/',
        audio: getURLAudio('/vi/media/english/us_pron/j/jam/jam__/jam.mp3')
      }
    ]
  },
  {
    label: 'z',
    cat: 'voiced',
    video: Video15,
    listVoca: [
      {
        label: 'zoo',
        pronun: '/zuː/',
        audio: getURLAudio('/vi/media/english/us_pron/z/zoo/zoo__/zoo.mp3')
      }
    ]
  },
  {
    label: 'ʒ',
    cat: 'voiced',
    video: Video16,
    listVoca: [
      {
        label: 'vision',
        pronun: '/ˈvɪʒn/',
        audio: getURLAudio('/vi/media/english/us_pron/v/vis/visio/vision.mp3')
      }
    ]
  },
  {
    label: 'g',
    cat: 'voiced',
    video: Video17,
    listVoca: [
      {
        label: 'get',
        pronun: '/ɡet/',
        audio: getURLAudio('/vi/media/english/us_pron/g/get/get__/get.mp3')
      }
    ]
  },
  {
    label: 'm',
    cat: 'voiced',
    video: Video18,
    listVoca: [
      {
        label: 'man',
        pronun: '/mæn/',
        audio: getURLAudio('/vi/media/english/us_pron/e/eus/eus72/eus72888.mp3')
      }
    ]
  },
  {
    label: 'n',
    cat: 'voiced',
    video: Video19,
    listVoca: [
      {
        label: 'now',
        pronun: '/naʊ/',
        audio: getURLAudio('/vi/media/english/us_pron/n/now/now__/now.mp3')
      }
    ]
  },
  {
    label: 'ŋ',
    cat: 'voiced',
    video: Video20,
    listVoca: [
      {
        label: 'sing',
        pronun: '/sɪŋ/',
        audio: getURLAudio('/vi/media/english/us_pron/s/sin/sing_/sing.mp3')
      }
    ]
  },
  {
    label: 'r',
    cat: 'voiced',
    video: Video21,
    listVoca: [
      {
        label: 'red',
        pronun: '/red/',
        audio: getURLAudio('/vi/media/english/us_pron/r/rea/read_/read_read.mp3')
      }
    ]
  },
  {
    label: 'l',
    cat: 'voiced',
    video: Video22,
    listVoca: [
      {
        label: 'leg',
        pronun: '/leɡ/',
        audio: getURLAudio('/vi/media/english/us_pron/l/leg/leg__/leg.mp3')
      }
    ]
  },
  {
    label: 'w',
    cat: 'voiced',
    video: Video23,
    listVoca: [
      {
        label: 'wet',
        pronun: '/wet/',
        audio: getURLAudio('/vi/media/english/us_pron/w/wet/wet__/wet.mp3')
      }
    ]

  },
  {
    label: 'j',
    cat: 'voiced',
    video: Video24,
    listVoca: [
      {
        label: 'yes',
        pronun: '/jes/',
        audio: getURLAudio('/vi/media/english/us_pron/y/yes/yes__/yes.mp3')
      }
    ]
  }
]

export default consonants;
