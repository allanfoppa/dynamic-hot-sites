import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

import measure from '../src/assets/css/measure'
import breakpoint from '../src/assets/css/breakpoint'
import display from '../src/assets/css/display'
import grid_template from '../src/assets/css/grid_template'
import align from './assets/css/align'
import justify from './assets/css/justify'
import margin from '../src/assets/css/margin'
import padding from '../src/assets/css/padding'
import cursor from '../src/assets/css/cursor'
import colors from '../src/assets/css/colors'

const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    outline: none;
    scroll-behavior: smooth;
}

*,
*::before,
*::after {
	box-sizing: inherit;
}

:focus {
    outline: none;
}

body {
    margin: 0;
    font-size: ${measure.m};
    font-family: Helvetica, sans-serif;
}

ul {
    list-style: none;
    padding: 0;
}

`;

const Container = styled.div`
    width: 100%;
    margin: 0 auto;

        @media ${breakpoint.tablet768} { 
            ${padding.right_m};
            ${padding.left_m};
        }
        @media ${breakpoint.laptop1024} { 
            width: 992px;
        }
        @media ${breakpoint.laptop1440} { 
            width: 1170px;
        }
        @media ${breakpoint.desktop1800} { 
            width: 1170px;
        }
`

// SOBRE
const AboutConteiner = styled.section`
    ${display.grid};
    grid-template-columns: 1fr;
    
    @media ${breakpoint.laptop1024} {
        grid-template-areas:
        'text carousel'
        'services carousel';
        grid-template-columns: .5fr 1fr;
        ${margin.top_xl};
        gap: ${measure.l};
    }
`



const SliderImage = styled.img`
    grid-area: carousel;
    max-height: 400px;
`

// Serviços
const ServicesContainer = styled.ul`
    ${display.grid};
    ${grid_template.columns__2fr};
    gap: ${measure.l};

    @media ${breakpoint.mobile425} { 
        ${grid_template.columns__1fr};
    }
`

const ServicesContainerList = styled.li`
    ${display.grid};
    grid-template-columns: 60px 1fr;
    height: ${measure.xl};
    ${align.items__center};
`

const ServicesListIcon = styled.div`
    ${display.grid};
    ${align.items__center};
    ${justify.content__center};
    height: 100%;
    background-color: ${colors.primary};
`

const ServicesListText = styled.div`
    ${display.grid};
    ${align.items__center};
    ${padding.left_m};
    height: 100%;
    border: 1px solid ${colors.primary};
`
const ServicesTitle = styled.h2`
    ${margin.none};
    ${margin.bottom_m};
    ${padding.bottom_s};
    font-size: ${measure.m};
    color: ${colors.primary};
    border-bottom: ${measure.xxs} solid ${colors.primary};

        @media ${breakpoint.tablet768} { 
            ${margin.top_m};
        }
`

// Lojas
const StoresTitle = styled(ServicesTitle)`
    ${margin.top_xl};
    ${display.grid};
    grid-template-columns: 5fr 1fr;
    ${align.items__center};

        @media ${breakpoint.tablet768} { 
            grid-template-columns: 4fr 1fr;
        }
`

const StoresIcons = styled.div`
    ${display.grid};
    ${grid_template.columns__3fr};
    ${justify.items__flex_end};
    ${cursor.pointer};

    @media ${breakpoint.tablet768} { 
        ${grid_template.columns__3fr};
        gap: ${measure.m};
    }
`

const StoresFiltersForm = styled.form`
    ${display.none};
    ${grid_template.columns__3fr};
    ${align.items__center};
    gap: ${measure.l};
    
    @media ${breakpoint.tablet768} { 
        ${grid_template.columns__1fr};
        gap: ${measure.m};
    }
`

const StoresFormSelect = styled.select`
    background-color: ${colors.transparent};
    border: ${measure.xxs} solid ${colors.primary};
    height: ${measure.l};
    ${padding.left_m};
`

const StoresList = styled.ul`
    ${display.grid};
    ${grid_template.columns__4fr};
    ${align.items__center};
    gap: ${measure.l};

    @media ${breakpoint.tablet768} { 
        ${grid_template.columns__1fr};
        gap: ${measure.m};
    }

`

const StoreImage = styled.img`
    ${display.flex};
    width: 100%;
    height: 100%;
`

const StoreContainerInfo = styled.div`
    border: 1px solid ${colors.primary};
`

const StorePrimaryText = styled.p`
    color: ${colors.primary};
    text-transform: uppercase;

    @media ${breakpoint.laptopL} { 
        ${padding.left_m}
    }
`

const StoreSecondaryText = styled.p`
    font-size: ${measure.sm};
    @media ${breakpoint.laptopL} { 
        ${padding.left_m}
    }
`

const StoreLink = styled.a`
    text-decoration: none;
    color: inherit;
`


// Mapa
const MapTitle = styled(ServicesTitle)`
    ${margin.top_xl};
`

const DivResponsive = styled.div`
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
`
const DivResponsiveElements = styled.div`
    width: 100%;
    max-width: 100%;
`

const FooterContainer = styled.div`
    width: 100%;
    max-width: 100%;
    border-top: ${measure.xxs} solid ${colors.primary};
    text-align: center;
    ${margin.top_xl};
`

const FooterText = styled.p`
    color: ${colors.primary};
`


export {
    GlobalStyles,
    Container,
    AboutConteiner,
    ServicesContainer,
    ServicesContainerList,
    ServicesListIcon,
    ServicesListText,
    ServicesTitle,
    SliderImage,
    MapTitle,
    StoresTitle,
    StoresIcons,
    StoresFiltersForm,
    StoresFormSelect,
    StoresList,
    StoreImage,
    StoreContainerInfo,
    StorePrimaryText,
    StoreSecondaryText,
    StoreLink,
    DivResponsive,
    DivResponsiveElements,
    FooterContainer,
    FooterText,
}