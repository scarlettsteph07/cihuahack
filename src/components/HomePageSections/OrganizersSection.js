import React from 'react'

import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'
import { EXTERNAL_LINKS } from '../../lib/appConstants'

export const OrganizersSection = () => {
  return (
    <OrganizersSectionStyles className='organizers' id='organizan'>
      <StyledSlatInner className='organizers__inner'>
        <h2 className='organizers__title'>Organizan</h2>
        <div className='organizers__logos'>
          <a href={EXTERNAL_LINKS.ES_US_EMBASSY} target='_blank' rel='noopener noreferrer'>
            <div className='organizers__logo organizers__logo--es-us-embassy'></div>
          </a>
          <a href={EXTERNAL_LINKS.KORINVER} target='_blank' rel='noopener noreferrer'>
            <div className='organizers__logo organizers__logo--korinver'></div>
          </a>
          <a href={EXTERNAL_LINKS.CCSA} target='_blank' rel='noopener noreferrer'>
            <div className='organizers__logo organizers__logo--ccsa'></div>
          </a>
          <a href={EXTERNAL_LINKS.AMERICAN_SPACES} target='_blank' rel='noopener noreferrer'>
            <div className='organizers__logo organizers__logo--amspaces'></div>
          </a>
        </div>
      </StyledSlatInner>
    </OrganizersSectionStyles>
  )
}

const OrganizersSectionStyles = StyledSlatOuter.extend`
  border-bottom: solid 10px #fafafa;
  .organizers {
    &__title {
      font-size: 35px;
      text-align: left;
      margin: 0px;
      margin-bottom: 20px;
    }

    &__logos {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    &__header {
      margin-bottom: 30px;
    }

    &__logo {
      width: 120px;
      height: 120px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      @media (min-width: ${({ theme }) => theme.large.start}) {
        width: 250px;
        height: 250px;
      }

      &--es-us-embassy {
        background-image: url('/images/logo--es-us-embassy.png');
      }

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