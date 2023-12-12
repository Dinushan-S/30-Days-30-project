import React from 'react'
import Slider from 'react-slick';
import styled from 'styled-components'

const CarauserContainer = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    `;

const CarauserItem = styled.div`
max-width
box-sizing: border-box;
img{
    max-width: 100%;
    height: auto;
    max-height: 170px;
    border-radius: 8px;
}
`;

export const Carausel = ({ image }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear"
    };
    return (
        <CarauserContainer>
            <Slider {...settings}>
                {image.map((image, index) => (
                    <CarauserItem key={index}>
                        <img src={image} alt={`Game ${index + 1}`} />
                    </CarauserItem>
                ))}
            </Slider>
        </CarauserContainer>
    )
}
