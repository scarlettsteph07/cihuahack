import React, { Component } from 'react'
import styled from 'styled-components'

import { HomePageHeader } from './'
import {
  AboutSection,
  HowToParticipateSection,
  PrizesSection,
  OrganizersSection,
  SupportersSection,
  WinnerSection
} from './HomePageSections/'

export class HomePage extends Component {
  render() {
    return (
      <HomePageStyles className='home-page'>
        <HomePageHeader/>
        <AboutSection />
        <HowToParticipateSection />
        <WinnerSection />
        <PrizesSection />
        <OrganizersSection />
        <SupportersSection />
      </HomePageStyles>
    )
  }
}

const HomePageStyles = styled.div`
  color: ${({theme}) => theme.red}
`