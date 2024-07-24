import React from 'react';
import MovieListPreview from './MovieList';

export default function MoviePreview() {
    $(document).ready(() => {
        $('#hamburger-menu').click(() => {
            $('#hamburger-menu').toggleClass('active');
            $('#nav-menu').toggleClass('active');
        });

        // setting owl carousel

        let navText = [
            "<i class='bx bx-chevron-left'></i>",
            "<i class='bx bx-chevron-right'></i>",
        ];

        $('#hero-carousel').owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            navText: navText,
            autoplay: true,
            autoplayHoverPause: true,
        });

        $('#top-movies-slide').owlCarousel({
            items: 2,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                500: {
                    items: 3,
                },
                1280: {
                    items: 4,
                },
                1600: {
                    items: 6,
                },
            },
        });

        $('.movies-slide').owlCarousel({
            items: 2,
            dots: false,
            nav: true,
            navText: navText,
            margin: 15,
            responsive: {
                500: {
                    items: 2,
                },
                1280: {
                    items: 4,
                },
                1600: {
                    items: 6,
                },
            },
        });
    });

    return (
        <div id='movies'>
            <div className='hero-section'>
                {/* HERO SLIDE */}
                <div className='hero-slide'>
                    <div
                        className='owl-carousel carousel-nav-center'
                        id='hero-carousel'
                    >
                        {/* SLIDE ITEM */}
                        {MovieListPreview &&
                            MovieListPreview.main.map((movie) => {
                                return (
                                    <div
                                        key={movie.id}
                                        className='hero-slide-item'
                                    >
                                        <img
                                            src={movie.img}
                                            alt={movie.title}
                                        />
                                        <div className='overlay' />
                                        <div className='hero-slide-item-content'>
                                            <div className='item-content-wraper'>
                                                <div className='item-content-title top-down'>
                                                    {movie.title}
                                                </div>
                                                <div className='movie-infos top-down delay-2'>
                                                    <div className='movie-info'>
                                                        <i className='bx bxs-star' />
                                                        <span>
                                                            {movie.rating}
                                                        </span>
                                                    </div>
                                                    <div className='movie-info'>
                                                        <i className='bx bxs-time' />
                                                        <span>
                                                            {movie.duration}
                                                        </span>
                                                    </div>
                                                    <div className='movie-info'>
                                                        <span>
                                                            {movie.quality}
                                                        </span>
                                                    </div>
                                                    <div className='movie-info'>
                                                        <span>{movie.age}</span>
                                                    </div>
                                                </div>
                                                <div className='item-content-description top-down delay-4'>
                                                    {movie.description}
                                                </div>
                                                <div className='item-action top-down delay-6'>
                                                    <a
                                                        href='/home'
                                                        className='btn btn-hover'
                                                    >
                                                        <i className='bx bxs-right-arrow' />
                                                        <span>Watch now</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                {/* END HERO SLIDE */}
                {/* TOP MOVIES SLIDE */}
                <div className='top-movies-slide'>
                    <div className='owl-carousel' id='top-movies-slide'>
                        {/* MOVIE ITEM */}
                        {MovieListPreview &&
                            MovieListPreview.secondList.map((movie) => {
                                return (
                                    <div key={movie.id} className='movie-item'>
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                        />
                                        <div className='movie-item-content'>
                                            <div className='movie-item-title'>
                                                {movie.title}
                                            </div>
                                            <div className='movie-infos'>
                                                <div className='movie-info'>
                                                    <i className='bx bxs-star' />
                                                    <span>{movie.rating}</span>
                                                </div>
                                                <div className='movie-info'>
                                                    <i className='bx bxs-time' />
                                                    <span>
                                                        {movie.duration}
                                                    </span>
                                                </div>
                                                <div className='movie-info'>
                                                    <span>{movie.quality}</span>
                                                </div>
                                                <div className='movie-info'>
                                                    <span>{movie.age}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                {/* END TOP MOVIES SLIDE */}
            </div>
            {/* END HERO SECTION */}
            {/* LATEST MOVIES SECTION */}
            <div className='section'>
                <div className='container'>
                    <div className='section-header'>latest movies</div>
                    <div className='movies-slide carousel-nav-center owl-carousel'>
                        {MovieListPreview &&
                            MovieListPreview.latestMovie.map((movie) => {
                                return (
                                    <div key={movie.id} className='movie-item'>
                                        <img
                                            src={movie.image}
                                            alt={movie.title}
                                        />
                                        <div className='movie-item-content'>
                                            <div className='movie-item-title'>
                                                {movie.title}
                                            </div>
                                            <div className='movie-infos'>
                                                <div className='movie-info'>
                                                    <i className='bx bxs-star' />
                                                    <span>{movie.rating}</span>
                                                </div>
                                                <div className='movie-info'>
                                                    <i className='bx bxs-time' />
                                                    <span>
                                                        {movie.duration}
                                                    </span>
                                                </div>
                                                <div className='movie-info'>
                                                    <span>{movie.quality}</span>
                                                </div>
                                                <div className='movie-info'>
                                                    <span>{movie.age}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}

                        {/* END MOVIE ITEM */}
                    </div>
                </div>
            </div>
        </div>
    );
}
