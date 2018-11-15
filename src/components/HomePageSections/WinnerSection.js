import React, { Component } from 'react'

import Slider from 'react-slick'
import StyledSlatOuter from '../StyledSlatOuter'
import StyledSlatInner from '../StyledSlatInner'
import images from '../../lib/carousel'
import styled from 'styled-components'

export class WinnerSection extends Component {
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
      <HomePageHeaderStyles className='home-page-header__outer' id='ganadores'>
        <StyledSlatInner className='home-page-header__inner'>
          <Slider {...settings} className='home-page-header__carousel'>
            {
              images.map((image, i) =>
                <div key={i}>
                  <div className='home-page-header__side-text'>
                    <ImageTitle
                      mainTopic={image.mainTopic}
                    >
                      {image.title}
                    </ImageTitle>
                    {
                      image.text.map((text, index) => (
                        <ImageText
                          key={index}>
                          {text}
                        </ImageText>
                      ))
                    }
                  </div>
                  <ImageContainer>
                    <BackgroundImage className='home-page-header__carousel__bg-image' bgImage={image.imageUrl} />
                  </ImageContainer>
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
  background-image: linear-gradient(209deg, #000d72, #050929 88%);
  height: 300px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    height: 450px;
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    height: 555px;
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
      background-color: transparent;
      color: ${({ theme }) => theme.white};
      position: absolute;
      height: 235px;
      width: 200px;
      z-index: 999;
      padding: 30px 20px 0 20px;
      display: flex;
      flex-flow: column;
      ${'' /* align-items: center; */}
      ${'' /* justify-content: center; */}
      text-align: left;
      @media (min-width: ${({ theme }) => theme.medium.start}) {
        width: 300px;
        height: 353px;
      }
      @media (min-width: ${({ theme }) => theme.large.start}) {
        width: 400px;
        height: 523px;
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
const ImageContainer = styled.div`
  margin: 0 auto;
  width: 862px;
`

const ImageText = styled.p`
  margin: 0 auto;
  font-weight: 400;
  font-size: 14px;
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    font-size: 1.35em;
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    padding: 5px 5px 0 0;
    font-size: 1.3em;
  }
`
const ImageTitle = styled.h1`
  padding-bottom: 10px;
  margin: 0;
  font-size: 1.2em;
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    font-size: 3em;
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    font-size: ${({ mainTopic }) => mainTopic ? '2.5em' : '1.9em'};
  }
`

const BackgroundImage = styled.div`
  ${'' /* margin-left: 175px; */}
  width: 862px;
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
    height: 555px;
    margin-left: 175px;
  }
`