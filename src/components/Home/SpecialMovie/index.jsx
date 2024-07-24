import React from 'react';
import transform from '../../../images/transformer-banner.jpg';

const SpecialMovie = () => {
    const movie = {
        id: 1,
        image: transform,
        title: 'Transformer',
        rating: '9.5',
        duration: '120 mins',
        quality: 'HD',
        age: '16+',
        description:
            'An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.',
    };

    return (
        <div className='section'>
            <div className='hero-slide-item'>
                <img src={movie.image} alt={movie.title} />
                <div className='overlay' />
                <div className='hero-slide-item-content'>
                    <div className='item-content-wraper'>
                        <div className='item-content-title'>{movie.title}</div>
                        <div className='movie-infos'>
                            <div className='movie-info'>
                                <i className='bx bxs-star' />
                                <span>{movie.rating}</span>
                            </div>
                            <div className='movie-info'>
                                <i className='bx bxs-time' />
                                <span>{movie.duration}</span>
                            </div>
                            <div className='movie-info'>
                                <span>{movie.quality}</span>
                            </div>
                            <div className='movie-info'>
                                <span>{movie.age}</span>
                            </div>
                        </div>
                        <div className='item-content-description'>
                            {movie.description}
                        </div>
                        <div className='item-action'>
                            <a href='/home' className='btn btn-hover'>
                                <i className='bx bxs-right-arrow' />
                                <span>Watch now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialMovie;
