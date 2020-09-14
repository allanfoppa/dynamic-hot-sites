import React from 'react'
import styled from 'styled-components'

import colors from '../../../assets/css/colors'
import breakpoint from '../../../assets/css/breakpoint'

import { FaMapMarkedAlt } from 'react-icons/fa'

const AboutTitle = styled.h1`
    margin: 0;
    margin-bottom: 8px;
    padding-bottom: 8px;
    text-transform: uppercase;
    font-size: 16px;
    color: ${props => props.newColor || colors.primary};
    border-bottom: 2px solid ${props => props.newColor || colors.primary};

        @media ${breakpoint.tablet768} {
            margin-top: 16px;
        }
`

const AboutDescription = styled.div`
    font-size: 14px;
    line-height: 26px;
`

const MapLink = styled.a`
    display: flex;
    align-items: center;
    margin-top: 20px;
    text-decoration: none;

    @media ${breakpoint.tablet768} {
        margin: 14px 0;
    }
`

const MapLinkText = styled.span`
    color: ${props => props.newColor || colors.primary};
    margin-left: 8px;
`

function AboutText(props){

    return(
        <section>
            <AboutTitle newColor={props.newColor}>
                SOBRE O {props.pName}
            </AboutTitle>
            <AboutDescription>
                O {props.pName} está localizado no coração da cidade, na Avenida Getúlio Vargas. Com amplo estacionamento, o centro comercial também conta com mix variado de lojas e praça de alimentação. Opções de vestuário, farmácia, ótica, telefonia e artigos para o lar, entre outras, tornam o hipermercado Bourbon Canoas um ponto de encontro que reúne lojas dos mais diversos segmentos.
            </AboutDescription>

            <MapLink tag="a" href="#map">
                <FaMapMarkedAlt size={40} color={props.newColor}></FaMapMarkedAlt>
                <MapLinkText newColor={props.newColor}>ver no mapa</MapLinkText>
            </MapLink>
        </section>
    )
}

export default AboutText