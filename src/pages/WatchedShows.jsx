import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from './WatchedShows.module.scss';
import Header from "../Components/Header";
import WatchedCard from "../Components/WatchedCard";

function WatchedShows() {
    const [watched, setWatched] = useState([]);
    const state = useSelector((state) => state);

    useEffect(() => {
        setWatched(state.watched);
    }, [state]);

    return (
        <main className={style.watchedShows}>
            <Header title='Watched shows'/>
            <section className={style.watchedShows__empty}>
                {watched.length === 0 && <p>You haven't finished a show yet!!? Hurry up, get back to the tv</p>}
            </section>
            <section className={style.watchedShows__shows}>
            {
                watched && watched.map((show) => <WatchedCard key={show.id} show={show}/>)
            }
            </section>
        </main>
    );
}

export default WatchedShows;