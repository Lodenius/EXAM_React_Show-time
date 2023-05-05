import { useSelector } from 'react-redux';
import ShowCard from '../Components/ShowCard';
import { useEffect, useState } from 'react';
import style from './StartPage.module.scss';
import Header from '../Components/Header';

function StartPage() {
    const [shows, setShows] = useState([]);

    const state = useSelector((state) => {
        return state;
    });
    
    useEffect(() => {
        setShows(state.shows);
    }, [state]);

    console.log(shows);

    return (
        <section className={style.startPage}>
            <Header title='My watchlist' />
                <section className={style.startPage__shows}>
                {shows.map((show) => <ShowCard key={show.id} show={show}/>)}
                </section>
        </section>

    );
}

export default StartPage;