import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from '../Components/Header';
import style from './ShowInfo.module.scss';
import Button from "../Components/Button";


function ShowInfo() {
    const [shows, setShows] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    const state = useSelector((state) => {
        return state;
    });

    useEffect(() => {
        let showMatch = state.shows.find((c) => c.id == params.id);
        setShows(showMatch);
    }, [state]);

    const [favoriteClick, setFavoriteClick] = useState(false);   
    const handleClick = () => {
        setFavoriteClick(!favoriteClick)
    };

    return (
        <main>
            <Header title="About the show"/>
            {shows && 
                <section className={style.showInfo}>
                    <section className={style.showInfo__buttons}>
                        <button className={style.showInfo__buttons__back} onClick={() => navigate(-1)}> &#60; back </button>
                        <button className={style.showInfo__buttons__star} onClick={handleClick}>{favoriteClick ? '★' : '☆'}</button>
                    </section>
                    <img src={shows.poster} className={style.showInfo__poster} height='280px'/>   
                    <h2 className={style.showInfo__title}>{shows.title}</h2>
                    <section className={style.showInfo__info}>
                        <p>No. seasons: {shows.seasons}</p>
                        <p>{shows.channel}</p>
                    </section>
                    <section className={style.showInfo__progress}>
                        <p>Episodes watched:</p>
                        <p>{shows.episodes}</p>
                    </section>
                    <section className={style.showInfo__progressButtons}>
                        <Button title="Update progress"/>
                        <Button title="Finished"/>
                    </section>
                </section>
                }
        </main>
    );
}

export default ShowInfo;