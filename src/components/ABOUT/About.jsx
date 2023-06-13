import './About.css'
import Carousel from 'react-bootstrap/Carousel';
import Wave from 'react-wavify'
import foto1 from "../../assets/foto-1.png"
import foto2 from "../../assets/foto-2.png"
import foto3 from "../../assets/foto-3.png"

export default function About() {
    return (
        <section id='about'>
            <div className="container text-center">
                <div className="row mt-5">
                    <div className="col">
                        <h1 className='about-title'>Hi, we are WOOF!</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className='title-text'>
                            WOOF! started with an assignment given to us to make a final semester project. However, with our creative minds, we saw an opportunity to create something more than just an academic assignment. With an entrepreneurial spirit, we decided to establish a clothing brand that combines innovative technology and inspirational designs. WOOF! is the realization of our dream to create something useful for others while still following our passion in the world of fashion.
                        </p>
                    </div>
                </div>

                <div id="about-carousel">
                    <Carousel variant='light'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 about-carousel"
                                src={foto3}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 about-carousel"
                                src={foto1}
                                alt="Second slide"
                            /> 
                        </Carousel.Item> 
                        <Carousel.Item>
                            <img
                                className="d-block w-100 about-carousel"
                                src={foto2}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>

                <div className='row mt-5'>
                    <div className='col'>
                        <h1 className='about-title-2'>Logo Philosophy</h1>
                    </div>
                </div>

                <div className='row logo-details d-flex justify-content-between'>
                    <div className="col-12 col-lg-5 mt-5">
                        <img src='https://cdn.discordapp.com/attachments/1091562630591811594/1117448928133128232/logo-no-background.webp' alt="logo-no-background" className='about-logo img-fluid' />
                    </div>
                    <div className="col-12 col-lg-7 mt-5">
                        <p className='logo-desc'>
                            The color yellow symbolizes optimism, friendliness, and warmth. Just like a dog that possesses cheerful, loyal, and friendly characteristics, welcoming its owner with a "woof woof woof" sound, we at WOOF! aim to create clothing that brings optimism, friendliness, and warmth to our customers. We are committed to always being cheerful, loyal, and friendly in providing a pleasant and satisfying shopping experience to our customers.
                        </p>
                    </div>
                </div>
                
                <div className="row mt-5">
                    <div className="col">
                        <h1 className='about-title-2'>Website Theme</h1>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col">
                        <p>
                            "Fashion with a Woof!" - Happiness and Friendship in Every Style Highlighting the core values of our company, which are embodied in the Woof! logo and our brand philosophy. This theme invites guests to experience warmth and joy through our brand's clothing.
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        
                    </div>
                </div>
            </div>
            <Wave fill='#fdc500'
                paused={false}
                options={{
                    height: 30,
                    amplitude: 50,
                    speed: 0.3,
                    points: 3
                }}
            />
        </section>
    )
}