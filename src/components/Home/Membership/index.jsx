import React from 'react';

const Membership = () => {
    // Define an array of membership plans
    const membershipPlans = [
        {
            name: 'Basic',
            price: 'Free',
            features: ['Showtime', 'Change Plan'],
            actionText: 'Register now',
        },
        {
            name: 'Premium',
            price: 'GHC 30',
            priceUnit: '/month',
            features: ['Showtime', 'Change Plan', 'VIP Seats', 'Early Tickets'],
            actionText: 'Register now',
        },
        {
            name: 'VIP',
            price: 'GHC 50',
            priceUnit: '/month',
            features: [
                'Showtime',
                'Change Plan',
                'VIP Seats',
                'Early Tickets',
                'Discount',
                'VIP Rooms',
            ],
            actionText: 'Register now',
        },
    ];

    return (
        <div id='membership' className='section'>
            <div className='container'>
                <div className='pricing'>
                    <div className='pricing-header'>
                        Movie<span className='main-color'>Life</span>Court
                        membership pricing
                    </div>
                    <div className='pricing-list'>
                        <div className='row'>
                            {membershipPlans.map((plan, index) => (
                                <div
                                    key={index}
                                    className='col-4 col-md-12 col-sm-12'
                                >
                                    <div
                                        className={`pricing-box ${
                                            index === 1 ? 'hightlight' : ''
                                        }`}
                                    >
                                        <div className='pricing-box-header'>
                                            <div className='pricing-name'>
                                                {plan.name}
                                            </div>
                                            <div className='pricing-price'>
                                                {plan.price}{' '}
                                                <span>{plan.priceUnit}</span>
                                            </div>
                                        </div>
                                        <div className='pricing-box-content'>
                                            {plan.features.map((feature, i) => (
                                                <p key={i}>{feature}</p>
                                            ))}
                                        </div>
                                        <div className='pricing-box-action'>
                                            <a
                                                href='/register'
                                                className='btn btn-hover'
                                            >
                                                <span>{plan.actionText}</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;
