import React, { Component } from 'react'
import styled from 'styled-components'

import { HomePageHeader } from './'
import {
  AboutSection,
  HowToParticipateSection,
  PrizesSection,
  FaqsSection,
  OrganizersSection,
  SupportersSection,
  TimeLine
} from './HomePageSections/'
// import SectionsData from '../lib/data'

export class HomePage extends Component {
  render() {
    return (
      <HomePageStyles className='home-page'>
        <HomePageHeader/>
        <TimeLine />
        <AboutSection />
        <HowToParticipateSection />
        <PrizesSection />
        <FaqsSection />
        <OrganizersSection />
        <SupportersSection />
      </HomePageStyles>
    )
  }
}

const HomePageStyles = styled.div`
  color: ${({theme}) => theme.red}
`