import React from 'react'
import styled from 'styled-components'

import { HomePageSection } from './'
import challenges from '../../lib/challenge'

export const HowToParticipateSection = () => {
  return (
    <HomePageSection
      title='Los Retos'
      slug='como-participar'
    >
      <HowToParticipateStyles>
        <div className='how-to-participate__text'>
          <span className='how-to-participate__text__bold'>Cihuahack</span> consiste en tres retos. Tres categorías diseñadas para trabajar en conjunto con el sitio arqueológico Cihuatán.
        </div>
        <div className='how-to-participate__list'>
          {
            challenges.map(section => (
              <Challenge
                className='how-to-participate__list__item'
                key={section.id}>
                <ChallengeImage
                  bgImage={section.image}
                />
                <div className='how-to-participate__list__section'>
                  <p className='how-to-participate__list__section__title'>
                    {section.title}
                  </p>
                  <p className='how-to-participate__list__section__text'>
                    {section.content}
                  </p>
                </div>
              </Challenge>
            ))
          }
        </div>
      </HowToParticipateStyles>
    </HomePageSection>
  )
}

const HowToParticipateStyles = styled.div`
  .how-to-participate {
    &__text {
      &__bold {
        margin-bottom: 30px;
        font-weight: 600;
      }
    }

    &__list {
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-around;
      &__section {
        padding: 0 30px;
        text-align: center;
        &__title {
          color: ${({ theme }) => theme.red};
        }
      }
      @media (max-width: ${({ theme }) => theme.small.end}) {
        padding-top: 55px;
        &__item {
          width: 100%;
        }
      }
      @media (min-width: ${({ theme }) => theme.medium.start}) {
        padding-top: 55px;
        margin: 0 0 0 -225px;
        flex-flow: wrap;
        &__item {
          height: 400px;
        }
      }
      @media (min-width: ${({ theme }) => theme.large.start}) {
        padding-top: 55px;
        margin: 0 0 0 -283px;
        &__item {
          height: 350px;
        }
      }
    }
  }
`

const Challenge = styled.div`
  width: 30%;
  height: 350px;
`

const ChallengeImage = styled.div`
  width: 100%;
  height: 166px;
  background-image: ${({ bgImage }) => `url(/images/${bgImage})` || ''};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
