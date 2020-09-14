import React from 'react'

import { StoresList, StoreImage, StorePrimaryText, StoreContainerInfo, DivResponsive, DivResponsiveElements, StoreSecondaryText, StoreLink } from '../../../styles'

class StoresInfo extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            stores: [
                {
                    id: 0,
                    image: require('../../../_mocks_/_mock_images/fachada.jpg'),
                    name: 'Loja 1',
                    name_slug: 'loja-1',
                    segment: 'Vestuário',
                    segment_slug: 'vestuario',
                    phone: '(51) 3333-3333',
                    email: 'loja1@loja.com.br',
                    website: 'www.umsite.com.br'
                },
                {
                    id: 1,
                    image: require('../../../_mocks_/_mock_images/fachada.jpg'),
                    name: 'Loja 2',
                    name_slug: 'loja-2',
                    segment: 'Salão de beleza',
                    segment_slug: 'salao-de-beleza',
                    phone: '(51) 3333-3333',
                    email: 'loja2@loja.com.br',
                    website: 'www.umsite.com.br'
                },
                {
                    id: 2,
                    image: require('../../../_mocks_/_mock_images/fachada.jpg'),
                    name: 'Loja 3',
                    name_slug: 'loja-3',
                    segment: 'Restaurante',
                    segment_slug: 'restaurante',
                    phone: '(51) 3333-3333',
                    email: 'loja3@loja.com.br',
                    website: 'www.umsite.com.br'
                },
                {
                    id: 3,
                    image: require('../../../_mocks_/_mock_images/fachada.jpg'),
                    name: 'Loja 4',
                    name_slug: 'loja-4',
                    segment: 'Farmácia',
                    segment_slug: 'farmacia',
                    phone: '(51) 3333-3333',
                    email: 'loja4@loja.com.br',
                    website: 'www.umsite.com.br'
                },
                {
                    id: 4,
                    image: require('../../../_mocks_/_mock_images/fachada.jpg'),
                    name: 'Loja 5',
                    name_slug: 'loja-5',
                    segment: 'Perfumaria',
                    segment_slug: 'perfumaria',
                    phone: '(51) 3333-3333',
                    email: 'loja5@loja.com.br',
                    website: 'www.umsite.com.br'
                },
                {
                    id: 5,
                    image: require('../../../_mocks_/_mock_images/fachada.jpg'),
                    name: 'Loja 6',
                    name_slug: 'loja-6',
                    segment: 'Farmácia',
                    segment_slug: 'farmacia',
                    phone: '(51) 3333-3333',
                    email: 'loja6@loja.com.br',
                    website: 'www.umsite.com.br'
                },
                {
                    id: 6,
                    image: require('../../../_mocks_/_mock_images/fachada.jpg'),
                    name: 'Loja 7',
                    name_slug: 'loja-7',
                    segment: 'Perfumaria',
                    segment_slug: 'perfumaria',
                    phone: '(51) 3333-3333',
                    email: 'loja7@loja.com.br',
                    website: 'www.umsite.com.br'
                },
            ]
        }
    }

    render(){

        return(
            <DivResponsive>
                <DivResponsiveElements>
                    <StoresList id="js-list-state-view">
                        {this.state.stores.map((store, i) => (
                            <StoreContainerInfo id={store.name_slug} className={store.segment_slug}>
                                <li key={i} className="js-list-itens-state-view">
                                    <StoreImage src={store.image} alt={"Imagem da Loja " + store.name} />
                                        <StorePrimaryText>{store.name}</StorePrimaryText>
                                        <StoreSecondaryText>{store.segment}</StoreSecondaryText>
                                        <StoreSecondaryText>{store.phone}</StoreSecondaryText>
                                        <StoreSecondaryText>{store.email}</StoreSecondaryText>
                                        <StoreSecondaryText><StoreLink href={store.website}>{store.website}</StoreLink></StoreSecondaryText>
                                </li>
                            </StoreContainerInfo>
                        ))}
                    </StoresList>
                </DivResponsiveElements>
            </DivResponsive>
        )
    }
}

export default StoresInfo