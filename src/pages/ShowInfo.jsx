import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Header from '../Components/Header';
import style from './ShowInfo.module.scss';
import Button from "../Components/Button";


function ShowInfo() {
    const [shows, setShows] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return state;
    });

    useEffect(() => {
        let showMatch = state.shows.find((c) => c.id == params.id);
        setShows(showMatch);
    }, [state]);

    function addShowToWatched() {
        console.log('done');
    }

    function updateProgress() {
        console.log('update');
    }

    // const [favoriteClick, setFavoriteClick] = useState(false);   
    // const handleClick = () => {
    //     setFavoriteClick(!favoriteClick)
    // };

    return (
        <main>
            <Header title="About the show"/>
            {shows && 
                <section className={style.showInfo}>
                    {/* <section className={style.showInfo__buttons}>
                        <button className={style.showInfo__buttons__back} onClick={() => navigate(-1)}> &#60; back </button>
                        <button className={style.showInfo__buttons__star} onClick={handleClick}>{favoriteClick ? '★' : '☆'}</button>
                    </section> */}
                    <img src={shows.poster} className={style.showInfo__poster} height='280px'/>   
                    <h2 className={style.showInfo__title}>{shows.title}</h2>
                    <section className={style.showInfo__info}>
                        <p>No. seasons: {shows.seasons}</p>
                        <p>{shows.channel}</p>
                    </section>
                    <section className={style.showInfo__progress}>
                        <p>Episodes watched: / Next episode to watch</p>
                        <p>season: episode:{shows.episodes}</p>
                    </section>
                    <section className={style.showInfo__progressButtons}>
                        <Button title="Update progress" action={updateProgress}/>
                        <Button title="Finished" action={addShowToWatched}/>
                    </section>
                </section>
                }
        </main>
    );
}

export default ShowInfo;