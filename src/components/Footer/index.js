import React from 'react'

import { Container, FooterText, FooterContainer } from '../../styles'

class Footer extends React.Component{
    render(){

        function getCurrentDate(){

            let newDate = new Date()
            let year = newDate.getFullYear();
            
            return `${year}`
        }

        return(
            <FooterContainer>
                <Container>
                    <FooterText>&copy; {getCurrentDate()} - Hipermercado Bourbon Canoas</FooterText>
                </Container>
            </FooterContainer>
        )
    }
}

export default Footer