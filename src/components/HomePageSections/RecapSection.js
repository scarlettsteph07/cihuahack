import React from 'react'
import styled from 'styled-components'

import { HomePageSection } from './'
import challenges from '../../lib/recap'

export const RecapSection = () => {
  return (
    <HomePageSection
      title='Cihuahack Recap'
      slug='recap'
    >
      <RecapSectionStyles>
        <div className='recap__text'>
          <span className='recap__text__bold'>La hackathon por un Cihuatán virtual fue una explosión de creatividad que se desplegó a lo largo de un fin de semana completo. En el siguiente recap te mostramos un poco del trabajo, dedicación y desvelo que vivimos en Cihuahack.</span>
        </div>
        <div className='recap__list'>
          {
            challenges.map((section, index) => (
              <Challenge
                willBeAnchor={section.willBeAnchor}
                className='recap__list__item'
                key={index}>
                <ChallengeImage
                  bgImage={section.url}
                />
              </Challenge>
            ))
          }
        </div>
      </RecapSectionStyles>
    </HomePageSection>
  )
}

const RecapSectionStyles = styled.div`
  .recap {
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
      justify-content: space-between;
      &__section {
        padding: 0 30px;
        text-align: center;
        &__title {
          color: ${({ theme }) => theme.red};
        }
      }
      @media (max-width: ${({ theme }) => theme.small.end}) {
        padding-top: 55px;
      }
      @media (min-width: ${({ theme }) => theme.medium.start}) {
        padding-top: 55px;
        margin: 0 0 0 -225px;
        flex-flow: wrap;
      }
      @media (min-width: ${({ theme }) => theme.large.start}) {
        padding-top: 55px;
        margin: 0 0 0 -283px;
      }
    }
  }
`

const Challenge = styled.div`
  width: ${({ willBeAnchor }) => willBeAnchor ? '100%' : '350px'};
  height: 150px;
  margin-top: 40px;
  @media (max-width: ${({ theme }) => theme.small.end}) {
    width: 100%;
    height: 300px;
  }
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    width: ${({ willBeAnchor }) => willBeAnchor ? '100%' : '250px'};
    height: 250px;
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    height: 260px;
    width: ${({ willBeAnchor }) => willBeAnchor ? '100%' : '350px'};
  }
`

const ChallengeImage = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  background-image: ${({ bgImage }) => `url(/images/recap/${bgImage})` || ''};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
