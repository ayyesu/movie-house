import React from 'react';
import demonSlayer from '../../../images/cartoons/demon-slayer.jpg';
import croods from '../../../images/cartoons/croods.jpg';
import dragonball from '../../../images/cartoons/dragon.jpg';
import overmoon from '../../../images/cartoons/over-the-moon.jpg';
import weathering from '../../../images/cartoons/weathering.jpg';
import yourname from '../../../images/cartoons/your-name.jpg';
import coco from '../../../images/cartoons/coco.jpg';

const Cartoons = () => {
    const cartoons = [
        {
            id: 1,
            img: demonSlayer,
            title: 'Demon Slayer',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 2,
            img: croods,
            title: 'Croods',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 3,
            img: dragonball,
            title: 'Dragonball',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 4,
            img: overmoon,
            title: 'Over The Moon',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 5,
            img: weathering,
            title: 'Weathering With You',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 6,
            img: yourname,
            title: 'Your Name',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 7,
            img: coco,
            title: 'Coco',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
    ];

    return (
        <div className='section '>
            <div className='container'>
                <div className='section-header'>latest cartoons & Animies</div>
                <div className='movies-slide carousel-nav-center owl-carousel'>
                    {/* MOVIE ITEM */}
                    {cartoons.map((cartoon) => {
                        return (
                            <a
                                href='/home'
                                key={cartoon.id}
                                className='movie-item'
                            >
                                <img src={cartoon.img} alt='' />
                                <div className='movie-item-content'>
                                    <div className='movie-item-title'>
                                        {cartoon.title}
                                    </div>
                                    <div className='movie-infos'>
                                        <div className='movie-info'>
                                            <i className='bx bxs-star' />
                                            <span>{cartoon.rating}</span>
                                        </div>
                                        <div className='movie-info'>
                                            <i className='bx bxs-time' />
                                            <span>{cartoon.duration}</span>
                                        </div>
                                        <div className='movie-info'>
                                            <span>{cartoon.quality}</span>
                                        </div>
                                        <div className='movie-info'>
                                            <span>{cartoon.age}</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        );
                    })}

                    {/* END MOVIE ITEM */}
                </div>
            </div>
        </div>
    );
};

export default Cartoons;
