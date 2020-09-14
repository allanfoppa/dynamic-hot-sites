import React from 'react'
import styled from 'styled-components'
import colors from '../../assets/css/colors'

// Sai quando for consultado a API
import appLogo from '../../assets/images/king.png'

const Header = styled.header`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bgColor || colors.primary} ;
    border-top: 1px solid #fff;
`

const ImageLogo = styled.img`
    display: flex;
    max-width: 100%;
    height: 60px;
`

function HeaderApp(props) {

    return (
        <Header bgColor={props.pBgColor}>
            <ImageLogo src={appLogo} alt=""/>
        </Header>
    );
}

export default HeaderApp