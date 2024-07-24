import React from 'react';
const Contact = () => {
    return (
        <section id='contact' className='contact-section'>
            <div className='container'>
                <div className='center'>
                    <div className=''>
                        <h3>Contact Us</h3>
                        <p>
                            Feel free to reach out to us. We'd love to hear from
                            you!
                        </p>
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className=''>
                        {/* Form goes here */}
                        <form
                            action='#'
                            method='post'
                            className='contact-form p-5'
                        >
                            <label htmlFor='name'>Name:</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                required=''
                            />
                            <label htmlFor='email'>Email:</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                required=''
                            />
                            <label htmlFor='phone'>Phone Number:</label>
                            <input type='tel' id='phone' name='phone' />
                            <label htmlFor='message'>Message:</label>
                            <textarea
                                id='message'
                                name='message'
                                rows={4}
                                required=''
                                defaultValue={''}
                            />
                            <div className='forms-box-action'>
                                <a href='#' className='btn btn-hover'>
                                    <span>SUBMIT</span>
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-6'>
                        {/* Background image for the contact section */}
                        <div className='contact-background' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
