import Video1 from 'assets/ipa/consonants/1_p.mov';
import Video2 from 'assets/ipa/consonants/2_f.mov';
import Video3 from 'assets/ipa/consonants/3_t.mov';
import Video4 from 'assets/ipa/consonants/4_O-.mov';
import Video5 from 'assets/ipa/consonants/5_tf.mov';
import Video6 from 'assets/ipa/consonants/6_s.mov';
import Video7 from 'assets/ipa/consonants/7_S.mov';
import Video8 from 'assets/ipa/consonants/8_k.mov';
import Video9 from 'assets/ipa/consonants/9_h.mov';
import Video10 from 'assets/ipa/consonants/10_b.mov';
import Video11 from 'assets/ipa/consonants/11_v.mov';
import Video12 from 'assets/ipa/consonants/12_d_.mov';
import Video13 from 'assets/ipa/consonants/13_D.mov';
import Video14 from 'assets/ipa/consonants/14_dz.mov';
import Video15 from 'assets/ipa/consonants/15_z_.mov';
import Video16 from 'assets/ipa/consonants/16_Z.mov';
import Video17 from 'assets/ipa/consonants/17_g.mov';
import Video18 from 'assets/ipa/consonants/18_m.mov';
import Video19 from 'assets/ipa/consonants/19_n.mov';
import Video20 from 'assets/ipa/consonants/20_N.mov';
import Video21 from 'assets/ipa/consonants/21_r.mov';
import Video22 from 'assets/ipa/consonants/22_l.mov';
import Video23 from 'assets/ipa/consonants/23_w.mov';
import Video24 from 'assets/ipa/consonants/24_j.mov';
import { getURLAudio } from './helpers';

const consonants = [
  {
    label: 'p',
    video: Video1,
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
