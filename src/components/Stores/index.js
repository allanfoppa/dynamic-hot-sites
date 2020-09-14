import React from 'react'

import StoresFiltersComponent from './StoresFiltersComponent/index'
import StoresInfo from './StoresInfo/index'

import { FiGrid, FiList, FiFilter } from 'react-icons/fi'
import { Container, StoresTitle, StoresIcons } from '../../styles'


class Stores extends React.Component{
    render(){
    
        function handleShowAndHideFilters() {
            document.getElementById('js-filters').style.display = 'grid'
        }

        function handleStoreStateView(type){
            const ul = document.getElementById('js-list-state-view')
            const li = document.getElementsByClassName('js-list-itens-state-view')
            const w = window.innerWidth;

            if (type === 'list') {
                
                if (w <= 768) {
                    ul.style.gridTemplateColumns = 'repeat(1, 1fr)'
                    console.log('mobile')
                    for (let i = 0; i < li.length; i++) {
                        const element = li[i];
                        
                        element.style.display = 'grid'
                        element.style.gridTemplateColumns = '100px repeat(5, 1fr)'
                        element.style.whiteSpace = 'nowrap'
                        element.style.maxHeight = '80px'
                        element.style.gap = '20px'
                    }
                } else {
                    ul.style.gridTemplateColumns = 'repeat(1, 1fr)'
                    console.log('desktop')
                    for (let i = 0; i < li.length; i++) {
                        const element = li[i];
                        
                        element.style.display = 'grid'
                        element.style.gridTemplateColumns = '100px repeat(5, 1fr)'
                        element.style.maxHeight = '80px'
                        element.style.gap = '20px'
                    }

                }
                
                
            } else {

                if (w <= 768) {
                    ul.style.gridTemplateColumns = 'repeat(1, 1fr)'
                } else {
                    ul.style.gridTemplateColumns = 'repeat(4, 1fr)'
                }


                for (let i = 0; i < li.length; i++) {
                    const element = li[i];
                    
                    element.style.display = ''
                    element.style.gridTemplateColumns = ''
                    element.style.maxHeight = ''
                    element.style.gap = ''
                }

            }
        }

        return(
            <Container>
                <StoresTitle>
                    <div>
                        LOJAS
                    </div>
                    <StoresIcons>
                        <FiGrid onClick={() => handleStoreStateView('grid')}></FiGrid>
                        <FiList onClick={() => handleStoreStateView('list')}></FiList>
                        <FiFilter onClick={() => handleShowAndHideFilters()}></FiFilter>
                    </StoresIcons>
                </StoresTitle>

                <StoresFiltersComponent />
                
                <StoresInfo />
                
            </Container>
        )
    }
}

export default Stores