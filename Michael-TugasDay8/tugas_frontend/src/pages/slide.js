import React from 'react'
import {
   Carousel
} from 'react-bootstrap'

class Slide extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://tx-free-imgs.acfun.cn/Fnp8aU9KLYorvsrZEyAjzSqnJtrR?imageslim"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>First slide</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.pinimg.com/originals/63/c6/26/63c626d973f83cca57ec2fc2129cdc6d.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>Second slide</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images6.alphacoders.com/647/647537.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h1>Third slide</h1>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
export default Slide