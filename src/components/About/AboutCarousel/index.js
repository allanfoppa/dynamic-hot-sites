import React from 'react'
import Slider from 'infinite-react-carousel'

import {SliderImage} from '../../../styles'

class AboutCarousel extends React.Component{
    constructor(props) {
        super(props)
        
        this.state = {
            // carouselImages: []
            carouselImages: [
				{
					id: 0,
					name: 'Imagem Um',
					src: require('../../../_mocks_/_mock_images/one.jpeg')
				},
				{
					id: 1,
					name: 'Imagem Dois',
					src: require('../../../_mocks_/_mock_images/two.jpg')
				},
				{
					id: 2,
					name: 'Imagem Três',
					src: require('../../../_mocks_/_mock_images/three.jpg')
				}
			]
        }
    }

    // Caso queira chamar as imagens da API
    // componentDidMount() {
    //     return axios.get(``)
    //         .then(response => {
    //             console.log(response)
    //             this.setState({
    //                 carouselImages: response.data
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    render() {
        const settings =  {
            arrows: false,
            arrowsBlock: false,
            autoplay: true,
            autoplaySpeed: 5000,
            className: 'carousel',
            // dots: true,
            duration: 300
        };
        return(
            <Slider { ...settings }>
                {this.state.carouselImages.map(image => (
                    <SliderImage key={image.id} src={image.src} alt={image.name}/>
                ))}
            </Slider>
        )
    }
}

export default AboutCarousel