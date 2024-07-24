import React from 'react';
import supergirl from '../../../images/series/supergirl.jpg';
import strangerThing from '../../../images/series/stranger-thing.jpg';
import starTrek from '../../../images/series/star-trek.jpg';
import penthouses from '../../../images/series/penthouses.jpg';
import mandalorian from '../../../images/series/mandalorian.jpg';
import theFalcon from '../../../images/series/the-falcon.webp';
import wanda from '../../../images/series/wanda.png';

const Series = () => {
    const series = [
        {
            id: 1,
            img: supergirl,
            title: 'Supergirl',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 2,
            img: strangerThing,
            title: 'Stranger Things',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 3,
            img: starTrek,
            title: 'Star Trek',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 4,
            img: penthouses,
            title: 'Penthouses',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 5,
            img: mandalorian,
            title: 'Mandalorian',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 6,
            img: theFalcon,
            title: 'The Falcon And The Winter Soldier',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
        {
            id: 7,
            img: wanda,
            title: 'Wanda Vision',
            rating: '9.5',
            duration: '120 mins',
            quality: 'HD',
            age: '16+',
        },
    ];

    return (
        <div className='section'>
            <div className='container'>
                <div className='section-header'>latest series</div>
                <div className='movies-slide carousel-nav-center owl-carousel'>
                    {series.map((series) => {
                        return (
                            <a
                                key={series.id}
                                href='/home'
                                className='movie-item'
                            >
                                <img src={series.img} alt={series.title} />
                                <div className='movie-item-content'>
                                    <div className='movie-item-title'>
                                        {series.title}
                                    </div>
                                    <div className='movie-infos'>
                                        <div className='movie-info'>
                                            <i className='bx bxs-star' />
                                            <span>{series.rating}</span>
                                        </div>
                                        <div className='movie-info'>
                                            <i className='bx bxs-time' />
                                            <span>{series.duration}</span>
                                        </div>
                                        <div className='movie-info'>
                                            <span>{series.quality}</span>
                                        </div>
                                        <div className='movie-info'>
                                            <span>{series.age}</span>
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

export default Series;
