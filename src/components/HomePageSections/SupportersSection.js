import React from 'react'

import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'
import { EXTERNAL_LINKS } from '../../lib/appConstants'

export const SupportersSection = () => {
  return (
    <SupportersSectionStyles className='supporters'>
      <StyledSlatInner className='supporters__inner'>
        <h2 className='supporters__title'>Con el Apoyo de</h2>
        <div className='supporters__logos'>
          <a href={EXTERNAL_LINKS.ABEU} target='_blank' rel='noopener noreferrer'>
            <div className='supporters__logo supporters__logo--abeu'/>
          </a>
          <a href={EXTERNAL_LINKS.KADEVJO} target='_blank' rel='noopener noreferrer'>
            <div className='supporters__logo supporters__logo--kadevjo'/>
          </a>
          <a href={EXTERNAL_LINKS.VERTEX} target='_blank' rel='noopener noreferrer'>
            <div className='supporters__logo supporters__logo--vertex'/>
          </a>
          <a href={EXTERNAL_LINKS.CASS} target='_blank' rel='noopener noreferrer'>
            <div className='supporters__logo supporters__logo--cass'/>
          </a>
          <a href={EXTERNAL_LINKS.ART_CODE} target='_blank' rel='noopener noreferrer'>
            <div className='supporters__logo supporters__logo--art-code'/>
          </a>
        </div>
      </StyledSlatInner>
    </SupportersSectionStyles>
  )
}

const SupportersSectionStyles = StyledSlatOuter.extend`
  display: flex;
  justify-content: space-between;

  .supporters {
    &__inner{
      width: 100%;
    }
    &__title {
      font-size: 35px;
      text-align: left;
      margin: 0px;
      margin-bottom: 20px;
    }

    &__logos {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
    }

    &__logo {
      width: 90px;
      height: 90px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      @media (min-width: ${({ theme }) => theme.large.start}) {
        width: 150px;
        height: 150px;
      }

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