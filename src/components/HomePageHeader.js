import React, { Component } from 'react'

import Slider from 'react-slick'
import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'
import images from '../lib/carousel'
import styled from 'styled-components'

export class HomePageHeader extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    }
    return (
      <HomePageHeaderStyles className='home-page-header__outer' id='cihuahack'>
        <StyledSlatInner className='home-page-header__inner'>
          <div className='home-page-header__side-text'>
            <h1 className='home-page-header__side-text__title'>Cihuahack</h1>
            <h2 className='home-page-header__side-text__subtitle'>Gira Universitaria y lanzamiento</h2>
            <h4 className='home-page-header__side-text__text'>
              Cihuahack se fue de gira, retando a jóvenes universitarios a unirse a la hackathon por un Cihuatán virtual.
            </h4>
          </div>
          <Slider {...settings} className='home-page-header__carousel'>
            {
              images.map((image, i) =>
                <div key={i}>
                  <BackgroundImage className='home-page-header__carousel__bg-image' bgImage={image.imageUrl} />
                </div>
              )
            }
          </Slider>
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

    &__side-text {
      background-color: rgba(0,0,0,0.5);
      box-shadow: 2px 2px 3px rgba(0,0,0,0.3);
      color: ${({ theme}) => theme.white};
      position: absolute;
      margin-top: 65px;
      height: 235px;
      width: 200px;
      z-index: 999;
      padding: 0 20px;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      h1 {
          margin: 0;
          font-size: 2em;
        }
      h2 {
        font-size: 1.1em;
      }
      h4 {
        margin: 0 auto;
        font-weight: 400;
        font-size: 14px;
      }
      @media (min-width: ${({ theme }) => theme.medium.start}) {
        width: 300px;
        margin-top: 65px;
        height: 385px;

        h1 {
          font-size: 3em;
        }
        h2 {
          font-size: 1.5em;
        }
        h4 {
          font-size: 1.35em;
        }
      }
      @media (min-width: ${({ theme }) => theme.large.start}) {
        width: 400px;
        margin-top: 90px;
        height: 555px;
        h1 {
          font-size: 4.5em;
        }
        h2 {
          font-size: 2em;
        }
        h4 {
          font-size: 1.5em;
        }
      }
    }

    &__carousel {
      width: 100% !important;
      height: 100%;
      cursor: pointer;
      .slick-dots {
        bottom: 25px;
      }
      .slick-dots li {
        z-index: 9999 !important;
        margin: 0 10px;
        button {
        &::before {
          color: white;
          font-size: 14px;
          }
        }
      }
    }
  }
`

const BackgroundImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${({ bgImage }) => bgImage ? `url(/images/${bgImage})` : ''};
  background-position: center;
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