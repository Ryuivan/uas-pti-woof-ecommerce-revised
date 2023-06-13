import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './Carousel.css';

export default function Carousel() {
    return (
        <div className='d-flex justify-content-center'>
            <Splide id='home-carousel' aria-label="My Favorite Images" options={{
                type: 'loop',
                autoplay: true,
                pauseOnHover: false,
                resetProgress: false,
                rewind: true,
                interval: 5000,
                waitForTransition: true,
                flickMaxPages: 1,
            }}>
                <SplideSlide className='img-wrap'>
                    <img src="https://cdn.discordapp.com/attachments/1091562630591811594/1112419401162047589/banner2.webp"  alt="banner-1" className='img-carousel img-fluid' />
                </SplideSlide>

                <SplideSlide className='img-wrap'>
                    <img src='https://cdn.discordapp.com/attachments/1091562630591811594/1112419244047597628/Artboard_1.webp' alt="banner-2" className='img-carousel img-fluid' />
                </SplideSlide>
                
                <SplideSlide className='img-wrap'>
                    <img src="https://cdn.discordapp.com/attachments/1091562630591811594/1112418397603504299/banner3_1.webp" alt="banner-3" className='img-carousel img-fluid' />
                </SplideSlide>
            </Splide>
        </div>
    );
}

