import vowels from '@/constants/ipa/vowels-monophthongs';
import diphthongs from '@/constants/ipa/vowels-diphthongs';
import consonants from '@/constants/ipa/consonants';

export const allIPA = [...vowels, ...diphthongs, ...consonants].sort((a, b) => a.order - b.order)