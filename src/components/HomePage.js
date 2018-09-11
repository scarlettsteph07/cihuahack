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
  TimeLineSection
} from './HomePageSections/'
// import SectionsData from '../lib/data'

export class HomePage extends Component {
  render() {
    return (
      <HomePageStyles className='home-page'>
        <HomePageHeader/>
        <AboutSection />
        <HowToParticipateSection />
        <PrizesSection />
        <FaqsSection />
        <TimeLineSection />
        <OrganizersSection />
        <SupportersSection />
      </HomePageStyles>
    )
  }
}

const HomePageStyles = styled.div`
  color: ${({theme}) => theme.red}
`