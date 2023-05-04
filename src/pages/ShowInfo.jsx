import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Header from '../Components/Header';
import style from './ShowInfo.module.scss';
import Button from "../Components/Button";
import { moveToWatched } from "../actions/showActions";


function ShowInfo() {
    const [shows, setShows] = useState([]);
    const params = useParams();
    const dispatch = useDispatch();

    const state = useSelector((state) => {
        return state;
    });

    useEffect(() => {
        let showMatch = state.shows.find((show) => show.id == params.id);
        setShows(showMatch);
    }, [state]);


    const addShowToWatched = () => {
        console.log('I have finished', shows);
        dispatch(moveToWatched(shows.id));
      };

    function updateProgress() {
        console.log('Update Progress of:', shows);
    }
    
    return (
        <main>
            <Header title="About the show"/>
            {shows && 
                <section className={style.showInfo}>
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
                    </section>
                    <Button title="Update progress" action={updateProgress}/>
                    <NavLink to='/watched'>
                        <Button title="Finished" action={addShowToWatched}/>
                    </NavLink>
                </section>
                }
        </main>
    );
}

export default ShowInfo;