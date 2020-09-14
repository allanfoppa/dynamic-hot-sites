import React from 'react'

import AboutText from './AboutText/index'
import AboutCarousel from './AboutCarousel/index'

import { Container, AboutConteiner } from '../../styles'

function About(props){

    return(
        <Container>
            <AboutConteiner>
                <AboutText newColor={props.pColor} pName={props.pName} />
                <AboutCarousel />
            </AboutConteiner>
        </Container>
    )
}

export default About