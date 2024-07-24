import {TicketIcon} from '@heroicons/react/24/solid';
import axios from 'axios';
import {useContext, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import Navbar from '../components/Navbar';
import ShowtimeDetails from '../components/ShowtimeDetails';
import {AuthContext} from '../context/AuthContext';
import PaystackPop from '@paystack/inline-js';

const Purchase = () => {
    const navigate = useNavigate();
    const {auth} = useContext(AuthContext);
    const location = useLocation();
    const showtime = location.state.showtime;
    const totalPrice = location.state?.totalPrice || 0;
    const selectedSeats = location.state.selectedSeats || [];
    const [isPurchasing, setIsPurchasing] = useState(false);

    const handlePaystackPayment = async () => {
        setIsPurchasing(true);
        // Payment with Paystack
        const paystack = new PaystackPop();
        paystack.newTransaction({
            key: 'pk_test_b5d561e60f9774fab97103ba3fbf2fc3b5611187',
            email: auth.email,
            amount: totalPrice * 100,
            currency: 'GHS',
            onSuccess: async (transition) => {
                let message =
                    'Payment complete! Reference: ' + transition.reference;
                toast.success(message);

                try {
                    const response = await axios.post(
                        `/showtime/${showtime._id}`,
                        {seats: selectedSeats},
                        {
                            headers: {
                                Authorization: `Bearer ${auth.token}`,
                            },
                        },
                    );
                    // console.log(response.data)
                    navigate('/cinema');
                    toast.success('Purchase seats successful!', {
                        position: 'top-center',
                        autoClose: 2000,
                        pauseOnHover: false,
                    });
                } catch (error) {
                    console.error(error);
                    toast.error(
                        error.response?.data.message ||
                            'Error confirming payment',
                        {
                            position: 'top-center',
                            autoClose: 2000,
                            pauseOnHover: false,
                        },
                    );
                } finally {
                    setIsPurchasing(false);
                }
            },
            onCancel: () => {
                toast.error('Payment cancelled!');
                setIsPurchasing(false);
            },
        });
    };

    return (
        <div className='flex text-black bg-cover min-h-screen flex-col gap-4 bg-gradient-to-br from-indigo-900 to-blue-500 pb-8 sm:gap-8'>
            <Navbar />
            <div className='mx-4 h-fit rounded-lg bg-gradient-to-br from-indigo-200 to-blue-100 p-4 drop-shadow-xl sm:mx-8 sm:p-6'>
                <ShowtimeDetails showtime={showtime} />
                <div className='flex flex-col justify-between rounded-b-lg bg-gradient-to-br from-indigo-100 to-white text-center text-lg drop-shadow-lg md:flex-row'>
                    <div className='flex flex-col items-center gap-x-4 px-4 py-2 md:flex-row'>
                        <p className='font-semibold'>Selected Seats : </p>
                        <p className='text-start'>{selectedSeats.join(', ')}</p>
                        {!!selectedSeats.length && (
                            <p className='whitespace-nowrap'>
                                ({selectedSeats.length} seats)
                            </p>
                        )}
                        <p className='font-semibold'>
                            Price(GH₵):{' '}
                            <span className='text-blue-500'>{totalPrice}</span>
                        </p>
                    </div>
                    {!!selectedSeats.length && (
                        <button
                            onClick={handlePaystackPayment}
                            className='flex items-center justify-center gap-2 rounded-b-lg  bg-gradient-to-br from-indigo-600 to-blue-500 px-4 py-1 font-semibold text-white hover:from-indigo-500 hover:to-blue-500 disabled:from-slate-500 disabled:to-slate-400 md:rounded-none md:rounded-br-lg'
                            disabled={isPurchasing}
                        >
                            {isPurchasing ? (
                                'Processing...'
                            ) : (
                                <>
                                    <p>Confirm Purchase</p>
                                    <TicketIcon className='h-7 w-7 text-white' />
                                </>
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Purchase;
