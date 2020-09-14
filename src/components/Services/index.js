import React from 'react'

import { FaWheelchair, FaBaby, FaDollarSign, FaPhone, FaUsers} from 'react-icons/fa'
import { MdDirectionsBike } from 'react-icons/md'

import { Container, ServicesTitle, ServicesContainer, ServicesContainerList, ServicesListIcon, ServicesListText } from '../../styles'

class Services extends React.Component{
    render(){
        return(
            <Container>
                <ServicesTitle>SERVIÇOS</ServicesTitle>

                <ServicesContainer>
                    {/* Sanitários familiar */}
                    <ServicesContainerList>
                        <ServicesListIcon>
                            <FaUsers size={20} color="#e0dfdd" />
                        </ServicesListIcon>
                        <ServicesListText>
                        Sanitários familiar
                        </ServicesListText>
                    </ServicesContainerList>
                    {/* Sanitários PNE */}
                    <ServicesContainerList>
                        <ServicesListIcon>
                            <FaWheelchair size={20} color="#e0dfdd" />
                        </ServicesListIcon>
                        <ServicesListText>
                            Sanitários para portadores de necessidades especiais
                        </ServicesListText>
                    </ServicesContainerList>
                    {/* Cadeira de rodas */}
                    <ServicesContainerList>
                        <ServicesListIcon>
                            <FaWheelchair size={20} color="#e0dfdd" />
                        </ServicesListIcon>
                        <ServicesListText>
                            Cadeira de rodas
                        </ServicesListText>
                    </ServicesContainerList>
                    {/* Fraldário */}
                    <ServicesContainerList>
                        <ServicesListIcon>
                            <FaBaby size={20} color="#e0dfdd" />
                        </ServicesListIcon>
                        <ServicesListText>
                            Fraldário
                        </ServicesListText>
                    </ServicesContainerList>
                    {/* Terminais bancários eletrônicos */}
                    <ServicesContainerList>
                        <ServicesListIcon>
                            <FaDollarSign size={20} color="#e0dfdd" />
                        </ServicesListIcon>
                        <ServicesListText>
                            Terminais bancários eletrônicos
                        </ServicesListText>
                    </ServicesContainerList>
                    {/* Bicicletário */}
                    <ServicesContainerList>
                        <ServicesListIcon>
                            <MdDirectionsBike size={20} color="#e0dfdd" />
                        </ServicesListIcon>
                        <ServicesListText>
                            Bicicletário
                        </ServicesListText>
                    </ServicesContainerList>
                    {/* Telefone público */}
                    <ServicesContainerList>
                        <ServicesListIcon>
                            <FaPhone size={20} color="#e0dfdd" />
                        </ServicesListIcon>
                        <ServicesListText>
                            Telefone público
                        </ServicesListText>
                    </ServicesContainerList>
                </ServicesContainer>
            </Container>
        )
    }

}

export default Services