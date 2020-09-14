import React, { useEffect, useState } from 'react';
import '../../styles.js'
import axios from 'axios'

import HeaderApp 	from '../Header'
import About 		from '../About'
import Services 	from '../Services'
import Stores 		from '../Stores'
import Footer 		from '../Footer'

function App() {

	const [ apiBGColor, setapiBGColor ] = useState('')
	const [ apiColor, setapiColor ] = useState('')
	const [ apiLogo, setapiLogo ] = useState('')
	const [ apiName, setapiName ] = useState('')

	useEffect(() => {
		axios.get('styles.json')
			.then((response) => {
				console.log(response.data.style)

				setapiName(response.data.institucional.name)
				setapiLogo(response.data.images.logo)
				setapiBGColor(response.data.style.backgroundColor)
				setapiColor(response.data.style.color)
			})
			.catch((error) => {
				console.log(error)
		})
	}, [])

	return (
		<div>
			<HeaderApp pBgColor={apiBGColor} logo={apiLogo}/>
			<About pColor={apiColor} pName={apiName} />
			<Services />
			<Stores />
			<Footer />
		</div>
	);
}

export default App;
