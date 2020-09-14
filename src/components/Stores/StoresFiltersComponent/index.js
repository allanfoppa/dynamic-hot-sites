import React from 'react'

import { StoresFiltersForm, StoresFormSelect } from '../../../styles'

class StoresFiltersComponent extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			segmentList: [
				{
					segment: 'Vestuário',
					slug: 'vestuario',
				},
				{
					segment: 'Salão de beleza',
					slug: 'salao-de-beleza',
				},
				{
					segment: 'Restaurante',
					slug: 'restaurante',
				},
				{
					segment: 'Farmácia',
					slug: 'farmacia',
				},
				{
					segment: 'Perfumaria',
					slug: 'perfumaria',
				},
			],
			nameList: [
				{
					shopName: 'Loja 1',
					slug: 'loja-1'
				},
				{
					shopName: 'Loja 2',
					slug: 'loja-2'
				},
				{
					shopName: 'Loja 3',
					slug: 'loja-3'
				},
				{
					shopName: 'Loja 4',
					slug: 'loja-4'
				},
				{
					shopName: 'Loja 5',
					slug: 'loja-5'
				},
				{
					shopName: 'Loja 6',
					slug: 'loja-6'
				},
				{
					shopName: 'Loja 7',
					slug: 'loja-7'
				},
			]
		};
	}

	render() {

		function handleHideItens(state){
			const storeList = document.querySelectorAll('#js-list-state-view div')
			
			if (state === 'hide') {
				
				for (let st = 0; st < storeList.length; st++) {
					storeList[st].style.display = 'none'
				}
			} else {

				document.getElementById('js-shopname').selectedIndex = 0
				document.getElementById('js-segment').selectedIndex = 0

				for (let st = 0; st < storeList.length; st++) {
					storeList[st].style.display = 'grid'
				}
			}
		}
		
		function handleFilterShopName(n){
			handleHideItens('hide')
			document.getElementById('js-segment').selectedIndex = 0
			document.getElementById(n).style.display = 'grid'
		}
		
		function handleFilterShopSegment(s){

			handleHideItens('hide')
			const segments = document.getElementsByClassName(s)

			for (let index = 0; index < segments.length; index++) {
				
				segments[index].style.display = 'grid'
			}
		}

		return (
			<StoresFiltersForm id="js-filters">
				<StoresFormSelect id="js-shopname" onChange={() => handleFilterShopName(document.getElementById('js-shopname').value)}>
					<option value="Nome">Nome</option>
					{this.state.nameList.map((nameItem, i) => (
					<option key={i} value={nameItem.slug}>{nameItem.shopName}</option>
					))}
				</StoresFormSelect>
				<StoresFormSelect id="js-segment" onChange={() => handleFilterShopSegment(document.getElementById('js-segment').value)}>
					<option value="Segmento">Segmento</option>
					{this.state.segmentList.map((segmentItem, i) => (
					<option key={i} value={segmentItem.slug}>{segmentItem.segment}</option>
					))}
				</StoresFormSelect>
				<span onClick={() => handleHideItens('show')}>limpar filtros</span>
			</StoresFiltersForm>
		);
	}
}
    

export default StoresFiltersComponent