import React from 'react'
import footerLogo from '../images/footerlogo.png';

import {
  FooterWrapper,
  WorkingTime,
  FooterHelperWrapper,
  LokacijeString,
  LokacijeWrapper,
  SingleLokacijeWrapper,
  SocialMediaWrapper
} from './Footer.styled'
import faceIcon from '../images/facebook-negative.png'
import instaIcon from '../images/instagram-negative.png'

const lokacijeData = [
  {
    title: 'Family Cup Novi Beograd, Blok 32',
    desc: 'Bulevar Zorana Đinđića 125e'
  },
  {
    title: 'Family Cup Bulevar kralja Aleksandra',
    desc: 'Bulevar kralja Aleksandra 26'
  },
  {
    title: 'Family Cup Banovo Brdo',
    desc: 'Nedeljka Čabrinovića 65'
  },
  {
    title: 'Family Cup Novi Beograd',
    desc: 'Bulevar Zorana Djindjića 12v'
  }
]
export default function Footer() {

  return (
    <FooterWrapper>
      <FooterHelperWrapper>
        <img src={footerLogo} />
        <WorkingTime>
          <p>Radno vreme: </p>
          <p className='light'>pon - sub</p>
          <p>08:00 - 22:00</p>
          <p className='light'>nedelja</p>
          <p>09:00 - 21:00</p>
        </WorkingTime>

        <LokacijeWrapper>
          <LokacijeString>Lokacije</LokacijeString>

          {lokacijeData.map(item => <SingleLokacijeWrapper>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </SingleLokacijeWrapper>)}
        </LokacijeWrapper>

        <SocialMediaWrapper>
          <a
            href="https://www.facebook.com/FamilyCupBulevar"
            target="_blank"
          >
            <img src={faceIcon} alt="facebook icon" />
          </a>
          <a
            href="https://www.instagram.com/kafeterija_family_cup/?hl=en"
            target="_blank"
          >
            <img src={instaIcon} alt="instagram icon" />
          </a>
        </SocialMediaWrapper>
      </FooterHelperWrapper>
    </FooterWrapper>
  )
}
