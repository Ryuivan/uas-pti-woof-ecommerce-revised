import Carousel from './Carousel/Carousel';
import Card from './Card/Card';
import Newsletter from './Newsletter/Newsletter';
import Promotion from './Promotion/Promotion';
import Card2 from './Card/Card2';

export default function Home() {
    return (
        <div>
            <Carousel />
            <Promotion />
            <Card />
            <Card2 />
            <Newsletter />
        </div>
    ) 
}