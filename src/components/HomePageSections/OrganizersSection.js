import React from 'react'
import styled from 'styled-components'

import { HomePageSection } from './'
import { EXTERNAL_LINKS } from '../../lib/appConstants'

export const OrganizersSection = () => {
  return (
    <HomePageSection
      title='Organizan'
      slug='organizan'
      headerImage='url(images/logo--es-us-embassy.png)'
      url={EXTERNAL_LINKS.ES_US_EMBASSY}
    >
      <OrganizersSectionStyles className='organizers'>
        <a href={EXTERNAL_LINKS.KORINVER} target='_blank' rel='noopener noreferrer'>
          <div className='organizers__logo organizers__logo--korinver'></div>
        </a>
        <a href={EXTERNAL_LINKS.CCSA} target='_blank' rel='noopener noreferrer'>
          <div className='organizers__logo organizers__logo--ccsa'></div>
        </a>
        <a href={EXTERNAL_LINKS.AMERICAN_SPACES} target='_blank' rel='noopener noreferrer'>
          <div className='organizers__logo organizers__logo--amspaces'></div>
        </a>
      </OrganizersSectionStyles>
    </HomePageSection>
  )
}

const OrganizersSectionStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;

  .organizers {
    &__header {
      margin-bottom: 30px;
    }
    &__logo {
      width: 230px;
      height: 230px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;

      &--korinver {
        background-image: url('/images/logo--korinver.png');
      }

      &--ccsa {
        background-image: url('/images/logo--ccsa.png');
      }

      &--amspaces {
        background-image: url('/images/logo--amspaces.png');
      }
    }
  }
`