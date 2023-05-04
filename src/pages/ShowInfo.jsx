import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Header from '../Components/Header';
import style from './ShowInfo.module.scss';
import Button from "../Components/Button";
import { addEpisode, moveToWatched } from "../actions/showActions";


function ShowInfo() {
    const params = useParams();
    const dispatch = useDispatch();
    
    const show = useSelector((state) =>
    state.shows.find((show) => show.id == params.id)
    );
    
    useEffect(() => {
        if (show) {
            setEpisodes(show.episodes);
        }
    }, [show]);

    const [episodes, setEpisodes] = useState(show ? show.episodes : 0);

    const addShowToWatched = () => {
        console.log('I have finished', show);
        dispatch(moveToWatched(show.id));
    };
    
    return (
        <main>
            <Header title="About the show"/>
            {show && 
                <section className={style.showInfo}>
                    <img src={show.poster} className={style.showInfo__poster} height='280px'/>   
                    <h2 className={style.showInfo__title}>{show.title}</h2>
                    <section className={style.showInfo__info}>
                        <p>No. seasons: {show.seasons}</p>
                        <p>{show.channel}</p>
                    </section>
                    <section className={style.showInfo__progress}>
                        <p>Episodes watched:</p> 
                            <section className={style.showInfo__progress__episodes}>
                                <p>{episodes}</p>
                                <button onClick={() => dispatch(addEpisode(show.id, 1))}>+</button>
                            </section>  
                    </section>
                    <NavLink to='/watched'>
                        <Button title="Finished" action={addShowToWatched}/>
                    </NavLink>
                </section>
                }
                
        </main>
    );
}

export default ShowInfo;