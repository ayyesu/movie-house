import React, {useState, useEffect, useContext} from 'react';
import Logo from '../../../images/logo1.jpg';
import NowShowing from '../../NowShowing';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
// import NowShowing from '../components/NowShowing';
import {AuthContext} from '../../../context/AuthContext';

export default function () {
    const {auth} = useContext(AuthContext);
    const [selectedMovieIndex, setSelectedMovieIndex] = useState(
        parseInt(sessionStorage.getItem('selectedMovieIndex')),
    );
    const [movies, setMovies] = useState([]);
    const [isFetchingMoviesDone, setIsFetchingMoviesDone] = useState(false);

    const fetchMovies = async (data) => {
        try {
            setIsFetchingMoviesDone(false);
            let response;
            if (auth.role === 'admin') {
                response = await axios.get('/movie/unreleased/showing', {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                });
            } else {
                response = await axios.get('/movie/showing');
            }
            // console.log(response.data.data)
            setMovies(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsFetchingMoviesDone(true);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);

    const props = {
        movies,
        selectedMovieIndex,
        setSelectedMovieIndex,
        auth,
        isFetchingMoviesDone,
    };
    return (
        <section id='section1'>
            <div className='about-section'>
                <div className='about-content'>
                    <h3>Movie Life Court</h3>
                    <p className='border-l-4 border-gray-500 pl-4 py-2 italic'>
                        <i>
                            "Where stories shine and joy takes the spotlight.
                            Step into the magic of cinema, where every seat is a
                            front-row experience."
                        </i>
                    </p>
                    <p>
                        A community-based movie house that prone to create a
                        private cinematic moment for individuals
                    </p>
                </div>
                <div className='logo1 overflow-x-auto'>
                    {/* <img src={Logo} alt='Logo' /> */}
                    <NowShowing {...props} />
                </div>
            </div>
        </section>
    );
}
