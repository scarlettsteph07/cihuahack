import React from 'react'
import styled from 'styled-components'

import { HomePageSection } from './'
import { IMAGES } from '../../lib/appConstants'

export const AboutSection = () => {
  return (
    <HomePageSection title='Cihuahack' slug='inicio' headerImage={IMAGES.DOG}>
      <AboutSectionStyles>
        <div className='about__text'>
          <span className='about__text__bold'>200 talentosos jóvenes salvadoreños se juntaron durante un fin de semana durante el cual, por 48 horas, trabajaron sin parar para completar el reto Cihuahack. </span>
        </div>
        <div className='about__text'>
           Utilizando tecnologías de realidad aumentada y virtual (AR/VR), estos jóvenes crearon aplicaciones que muestran como se vivió en su plenitud la antigua ciudad de Cihuatán. Los trabajos con mejor potencial fueron elegidos por un grupo de jueces expertos y fueron premiados con equipo especializado y mentorías para desarrollar su prototipo y convertirlo en una app funcional.
        </div>
        <div className='about__text'>
          A manera de brindar seguimiento a los equipos participantes, se realizarán actividades de tutoría, redes de desarrollo profesional y la preparación para un futuro evento en 2019.
        </div>
        <div className='about__text'>
          Sin duda alguna Cihuahack es la combinación perfecta entre la creatividad de la realidad virtuall y nuestra riqueza cultural salvadoreña. 
        </div>
      </AboutSectionStyles>
    </HomePageSection>
  )
}

const AboutSectionStyles = styled.div`
  display: flex;
  flex-flow: column;

  .about {
    &__text {
      margin-bottom: 25px;
      &__bold {
        font-weight: 600;
      }
    }
  }
`