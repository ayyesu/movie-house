import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import ShowtimeDetails from '../components/ShowtimeDetails';
import {AuthContext} from '../context/AuthContext';
// import html2canvas from 'html2canvas';
// import {saveAs} from 'file-saver';

const Tickets = () => {
    const {auth} = useContext(AuthContext);
    const [tickets, setTickets] = useState([]);
    const [isFetchingticketsDone, setIsFetchingticketsDone] = useState(false);
    const fetchTickets = async () => {
        try {
            setIsFetchingticketsDone(false);
            const response = await axios.get('/auth/tickets', {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            });
            console.log(
                'response.data.data.tickets',
                response.data.data.tickets,
            );
            setTickets(response.data.data.tickets.sort((a, b) => b - a));
        } catch (error) {
            console.error(error);
        } finally {
            setIsFetchingticketsDone(true);
        }
    };

    console.log('tickets', tickets);

    // const downloadDiv = () => {
    //     const element = document.getElementById('downloadableDiv');

    //     html2canvas(element).then((canvas) => {
    //         // Convert canvas to blob
    //         canvas.toBlob((blob) => {
    //             // Trigger a download using file-saver
    //             saveAs(blob, 'downloaded_ticket.png');
    //         });
    //     });
    // };

    useEffect(() => {
        fetchTickets();
    }, []);

    return (
        <div className='flex bg-cover min-h-screen flex-col gap-4 bg-gradient-to-br from-indigo-900 to-blue-500 pb-8 text-gray-900 sm:gap-8'>
            <Navbar />
            <div className='mx-4 flex h-fit flex-col gap-4 rounded-md bg-slate-800 from-indigo-200 to-blue-100 p-4 drop-shadow-xl sm:mx-8 sm:p-6'>
                <h2 className='text-2xl font-bold text-white'>My Tickets</h2>
                {isFetchingticketsDone ? (
                    <>
                        {tickets.length === 0 ? (
                            <p className='text-center'>
                                You have not purchased any tickets yet
                            </p>
                        ) : (
                            <div className='grid grid-cols-1 gap-4 xl:grid-cols-2 min-[1920px]:grid-cols-3'>
                                {tickets.map((ticket, index) => {
                                    return (
                                        <div
                                            className='flex flex-col'
                                            id='downloadableDiv'
                                            key={index}
                                        >
                                            <ShowtimeDetails
                                                showtime={ticket.showtime}
                                            />
                                            <div className='flex h-full flex-col justify-between rounded-b-lg bg-gradient-to-br from-indigo-100 to-white text-center text-lg drop-shadow-lg md:flex-row'>
                                                <div className='flex h-full flex-col items-center gap-x-4 px-4 py-2 md:flex-row'>
                                                    <p className='whitespace-nowrap font-semibold'>
                                                        Seats :{' '}
                                                    </p>
                                                    <p className='text-left'>
                                                        {ticket.seats
                                                            .map(
                                                                (seat) =>
                                                                    seat.row +
                                                                    seat.number,
                                                            )
                                                            .join(', ')}
                                                    </p>
                                                    <p className='whitespace-nowrap'>
                                                        ({ticket.seats.length}{' '}
                                                        seats)
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </>
                ) : (
                    <Loading />
                )}
            </div>
        </div>
    );
};

export default Tickets;
