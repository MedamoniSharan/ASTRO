import ganapathi from '../assets/ganapathi-puja.jpg'
import satyanarayana from '../assets/satyanarayana-vratam.jpg'
import marriage from '../assets/marriage.jpg'
import houseCeremony from '../assets/house-ceremony.jpg'
import officeOpening from '../assets/office-opening.jpg'
import namakaranam from '../assets/namakaranam.jpg'
import narayanaBali from '../assets/narayana-bali.jpg'
import pitruShanti from '../assets/pitru-shanti.jpg'
import sarpaDosha from '../assets/sarpa-dosha.jpg'
import kujaDosha from '../assets/kuja-dosha.jpg'
import sudarshanaYagam from '../assets/sudarshana-yagam.jpg'
import chandiYagam from '../assets/chandi-yagam.jpg'
import rudraYagam from '../assets/rudra-yagam.jpg'

export const site = {
  name: 'Sri Bhramari Veda Puja Services',
  tagline: 'by Srivalli Astrology',
  strapline: 'Traditional Vedic Rituals • Experienced Purohits • Trusted Service',
  phone: '9988678989',
  phoneIntl: '+919988678989',
  whatsapp: '919988678989',
  youtube: 'https://youtube.com/@srivalliastrology',
  youtubeHandle: '@srivalliastrology',
  coverage: 'All over India',
  founder: 'Sri Vigneswara Sharma',
}

export const telLink = `tel:${site.phoneIntl}`

export function whatsappLink(service?: string) {
  const text = service
    ? `Namaste, I would like to book ${service}. Please share the details.`
    : 'Namaste, I would like to book a puja service. Please share the details.'
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`
}

export function formatINR(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export type Puja = {
  name: string
  subtitle: string
  description: string
  price: number
  image: string
}

export const pujas: Puja[] = [
  {
    name: 'Ganapathi Puja',
    subtitle: 'Vighna Nivarana',
    description: 'Invoke Lord Ganesha to remove obstacles before any new beginning or auspicious event.',
    price: 2000,
    image: ganapathi,
  },
  {
    name: 'Satyanarayana Vratam',
    subtitle: 'Sri Satyanarayana Swamy',
    description: 'The sacred vratam and katha for prosperity, harmony and fulfilment of family wishes.',
    price: 5500,
    image: satyanarayana,
  },
  {
    name: 'Vivaham / Marriage Rituals',
    subtitle: 'Kalyanam',
    description: 'Complete Vedic wedding ceremonies performed with every traditional step and mantra.',
    price: 11500,
    image: marriage,
  },
  {
    name: 'House Ceremony',
    subtitle: 'Gruhapravesham & Vastu',
    description: 'Bless your new home with Gruhapravesham, Vastu puja and homam for peace and prosperity.',
    price: 15000,
    image: houseCeremony,
  },
  {
    name: 'Office Opening',
    subtitle: 'Vyapara Prarambham',
    description: 'Start your business or new office on an auspicious muhurtham with Ganapathi and Lakshmi puja.',
    price: 11000,
    image: officeOpening,
  },
  {
    name: 'Namakaranam',
    subtitle: 'Naming Ceremony',
    description: 'A joyous naming ceremony for your little one, with blessings for a bright and healthy life.',
    price: 3000,
    image: namakaranam,
  },
  {
    name: 'Narayana Bali',
    subtitle: 'Pitru Moksha',
    description: 'A sacred ritual performed for the peace and liberation of departed souls of the family.',
    price: 21000,
    image: narayanaBali,
  },
  {
    name: 'Pitru Shanti',
    subtitle: 'Ancestral Blessings',
    description: 'Seek the blessings of your ancestors and relieve Pitru dosha through proper shanti karmas.',
    price: 15000,
    image: pitruShanti,
  },
  {
    name: 'Sarpa Dosha Nivarana',
    subtitle: 'Naga Dosha Shanti',
    description: 'Remedial puja to pacify Sarpa and Naga doshas indicated in the horoscope.',
    price: 21000,
    image: sarpaDosha,
  },
  {
    name: 'Kuja Dosha Nivarana',
    subtitle: 'Mangal Dosha Shanti',
    description: 'Shanti puja and homam to reduce the effects of Kuja dosha, especially for marriage matters.',
    price: 20000,
    image: kujaDosha,
  },
]

export type Yagam = {
  name: string
  description: string
  icon: 'sun' | 'disc' | 'flame' | 'moon'
  image?: string
}

export const yagams: Yagam[] = [
  {
    name: 'All Navagraha Shanti',
    description: 'Shanti for all nine planets to balance their influences and bring stability in life.',
    icon: 'sun',
  },
  {
    name: 'Sudarshana Yagam',
    description: 'Invoke Sri Sudarshana for protection from negativity, obstacles and unseen troubles.',
    icon: 'disc',
    image: sudarshanaYagam,
  },
  {
    name: 'Chandi Yagam',
    description: 'A powerful homam to Goddess Chandi for strength, courage and victory over difficulties.',
    icon: 'flame',
    image: chandiYagam,
  },
  {
    name: 'Rudra Yagam',
    description: 'Rudra abhishekam and homam to Lord Shiva for health, peace and spiritual upliftment.',
    icon: 'moon',
    image: rudraYagam,
  },
]

export type Service = {
  name: string
  icon:
    | 'home'
    | 'om'
    | 'hands'
    | 'flame'
    | 'rings'
    | 'graduation'
    | 'baby'
    | 'candle'
    | 'flower'
    | 'stars'
}

export const services: Service[] = [
  { name: 'Gruhapravesham & Vastu Pujas', icon: 'home' },
  { name: 'Ganapathi Puja & Homam', icon: 'om' },
  { name: 'Satyanarayana Swamy Vratam', icon: 'hands' },
  { name: 'Havan & Homam', icon: 'flame' },
  { name: 'Marriage & Wedding Rituals', icon: 'rings' },
  { name: 'Upanayanam', icon: 'graduation' },
  { name: 'Namakaranam & other family ceremonies', icon: 'baby' },
  { name: 'Pitru Karyas & Shraddha rituals', icon: 'candle' },
  { name: 'Special festival and devotional pujas', icon: 'flower' },
  { name: 'Astrology and Muhurtham consultations', icon: 'stars' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Pujas', href: '#pujas' },
  { label: 'Yagams', href: '#yagams' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
