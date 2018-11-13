import React, { Component } from 'react'

import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'
import styled from 'styled-components'
import { EXTERNAL_LINKS } from '../lib/appConstants'

export class HomePageHeader extends Component {
  render() {
    return (
      <HomePageHeaderStyles className='home-page-header__outer' id='cihuahack'>
        <StyledSlatInner className='home-page-header__inner'>
          <div className='home-page-header__center-text'>
            <h1 className='home-page-header__center-text__title'>Cihuahack</h1>
            <a
              className='home-page-header__center-text__button'
              href={EXTERNAL_LINKS.PROJECTS_LINK}
              target={EXTERNAL_LINKS.PROJECTS_LINK.startsWith('#') ? '_self' : '_blank'}
            >
              Ver los proyectos >
            </a>
          </div>
          <BackgroundImage className='home-page-header__carousel__bg-image' bgImage="header.png" />
        </StyledSlatInner>
      </HomePageHeaderStyles>
    )
  }
}

const HomePageHeaderStyles = StyledSlatOuter.extend`
  height: 300px;
  box-shadow: ${({theme}) => theme.boxShadow};
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    height: 450px;
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    height: 645px;
  }

  .home-page-header {
    &__outer {
    }

    &__inner {
      max-width: 100% !important;
      height: 100%;
      padding: 0px;
      margin: 0px;
      @media (min-width: ${({ theme }) => theme.large.start}) {
        margin: auto;
      }
    }

    &__center-text {
      background-color: transparent;
      color: ${({ theme}) => theme.white};
      padding-top: 90px;
      position: absolute;
      margin-top: 65px;
      width: 100%;
      z-index: 999;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      h1 {
          margin: 0;
          font-size: 3.5em;
        }
      &__button {
        cursor: pointer;
        margin: 0 auto;
        background-color: ${({ theme }) => theme.red};
        padding: 10px 15px;
        font-size: 1.05em;
        border-radius: 5px;
        color: ${({ theme }) => theme.white};
        font-weight: bold;
        text-align: center;
        border: 3px solid ${({ theme }) => theme.red};
        &:hover {
          ${'' /* color: ${({ theme }) => theme.white}; */}
          ${'' /* background-color: white; */}
        }
      }
      @media (min-width: ${({ theme }) => theme.medium.start}) {
        width: 100%;
        padding-top: 200px;
        h1 {
          font-size: 5em;
        }
        &__button {
          font-size: 1.3em; 
          padding: 18px 10px;
        }
      }
      @media (min-width: ${({ theme }) => theme.large.start}) {
        width: 100%;
        padding-top: 330px;
        h1 {
          font-size: 7em;
        }
        &__button {
          padding: 20px 15px;
          font-size: 1.7em;
        }
      }
    }
  }
`

const BackgroundImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${({ bgImage }) => bgImage ? `url(/images/${bgImage})` : ''};
  background-position: 0% 80%;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    margin-top: 0;
    height: 450px;
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    height: 645px;
  }
`