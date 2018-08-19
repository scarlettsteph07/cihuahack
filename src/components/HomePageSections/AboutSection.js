import React from 'react'
import styled from 'styled-components'

import { HomePageSection } from './'
import { IMAGES } from '../../lib/appConstants'

export const AboutSection = () => {
  return (
    <HomePageSection title='Cihuahack' slug='inicio' headerImage={IMAGES.DOG}>
      <AboutSectionStyles>
        <div className='about__text'>
          <span className='about__text__bold'>Cihuahack</span> es un evento de programación de dos días que intenta involucrar un máximo de 200 jóvenes creadores de software para crear productos comercialmente viables y, al mismo tiempo, ayudar a reforzar un sentido de orgullo cultural en El Salvador.
        </div>
        <div className='about__text'>
          El evento estará enfocado a crear, utilizando tecnologías de realidad aumentada y virtual (AR/VR), aplicaciones que muestren como fue en su plenitud el Parque Arqueológico de Cihuatán. Los trabajos con mejor potencial serán premiados con equipo especializado y mentorías para desarrollar su prototipo y convertirlo en una app funcional.
        </div>
        <div className='about__text'>
          Este proyecto también incluye un evento de preparación para aprovechar la experiencia de especialistas en AR/VR de EE.UU., empresarios salvadoreños de IT, expertos en patrimonio cultural y autoridades de propiedad intelectual. Una vez concluido Cihuahack, se realizarán actividades de seguimiento por un año para apoyar a los participantes con actividades de tutoría, redes de desarrollo profesional y la preparación para un futuro evento en 2019.
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