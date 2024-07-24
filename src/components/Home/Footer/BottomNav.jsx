const BottomNav = () => {
    return (
        <footer id='about' className='section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 col-md-6 col-sm-12'>
                        <div className='content'>
                            <a href='#' className='logo'>
                                <i className='bx bx-movie-play bx-tada main-color' />
                                Movie<span className='main-color'>Life</span>
                                Court
                            </a>
                            <p>
                                Where stories shine and joy takes the spotlight.
                                Step into the magic of cinema, where every seat
                                is a front-row experience.{' '}
                            </p>
                            <div className='social-list'>
                                <a href='#' className='social-item'>
                                    <i className='bx bxl-facebook' />
                                </a>
                                <a href='#' className='social-item'>
                                    <i className='bx bxl-twitter' />
                                </a>
                                <a href='#' className='social-item'>
                                    <i className='bx bxl-whatsapp' />
                                </a>
                                <a href='#' className='social-item'>
                                    <i className='bx bxl-instagram' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-8 col-md-6 col-sm-12'>
                        <div className='row'>
                            <div className='col-3 col-md-6 col-sm-6'>
                                <div className='content'>
                                    <p>
                                        <b>MLC</b>
                                    </p>
                                    <ul className='footer-menu'>
                                        <li>
                                            <a href='#'>Home</a>
                                        </li>
                                        <li>
                                            <a href='#'>About</a>
                                        </li>
                                        <li>
                                            <a href='#'>Movies</a>
                                        </li>
                                        <li>
                                            <a href='#'>Membership</a>
                                        </li>
                                        <li>
                                            <a href='#'>Contacts</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default BottomNav;
