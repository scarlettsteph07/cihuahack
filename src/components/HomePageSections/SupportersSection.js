import React from 'react'
import styled from 'styled-components'

import { HomePageSection } from './'
import { EXTERNAL_LINKS } from '../../lib/appConstants'

export const SupportersSection = () => {
  return (
    <HomePageSection
      title='Con el apoyo de'
      slug='colaboradores'
      headerImage='url(images/logo--kadevjo.png)'
      url={EXTERNAL_LINKS.KADEVJO}
    >
      <SupportersSectionStyles className='supporters'>
        <a href={EXTERNAL_LINKS.VERTEX} target='_blank' rel='noopener noreferrer'>
          <div className='supporters__logo supporters__logo--vertex'/>
        </a>
        <a href={EXTERNAL_LINKS.CASS} target='_blank' rel='noopener noreferrer'>
          <div className='supporters__logo supporters__logo--cass'/>
        </a>
        <a href={EXTERNAL_LINKS.ART_CODE} target='_blank' rel='noopener noreferrer'>
          <div className='supporters__logo supporters__logo--art-code'/>
        </a>
        <a href={EXTERNAL_LINKS.ABEU} target='_blank' rel='noopener noreferrer'>
          <div className='supporters__logo supporters__logo--abeu'/>
        </a>
      </SupportersSectionStyles>
    </HomePageSection>
  )
}

const SupportersSectionStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-top: 125px;

  .supporters {
    &__logo {
      width: 150px;
      height: 150px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      &--kadevjo {
        background-image: url('/images/logo--kadevjo.png');
      }

      &--vertex {
        background-image: url('/images/logo--vertex.png');
      }

      &--cass {
        background-image: url('/images/logo--cass.png');
      }

      &--art-code {
        background-image: url('/images/logo--art-code.png');
      }

      &--abeu {
        background-image: url('/images/logo--abeu.png');
      }
    }
  }
`