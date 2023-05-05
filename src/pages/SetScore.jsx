import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import Header from '../Components/Header';
import style from './SetScore.module.scss';
import Button from "../Components/Button";
import { changeScore, moveToWatched } from "../actions/showActions";
import { useEffect, useState } from "react";


function SetScore() {
    const params = useParams();
    const dispatch = useDispatch();
    
    const show = useSelector((state) =>
    state.shows.find((show) => show.id == params.id)
    );
    
    const [score, setScore] = useState(show ? show.score : 0);

    useEffect(() => {
        if (show) {
            setScore(show.score);
        }
    }, [show]);


    const addShowToWatched = () => {
        dispatch(moveToWatched(show.id));
    };
    
    return (
        <main>
            <Header title="Set score"/>
            {show && 
                <section className={style.setScore}>
                    {/* <img src={show.poster} height='280px'/>   
                    <h2 className={style.setScore__title}>{show.title}</h2> */}

                    <section className={style.setScore__score}>
                        <p>How many stars do you give <br></br>{show.title} ?</p> 
                            <section className={style.setScore__score__setter}>
                                <button onClick={() => dispatch(changeScore(show.id, - 1))}>-</button>
                                <p>{show.score}</p>
                                <button onClick={() => dispatch(changeScore(show.id, 1))}>+</button>
                            </section>  
                    </section>
                    <section className={style.finishedButton}>
                        <NavLink to='/watched'>
                            <Button title="Finished" action={addShowToWatched}/>
                        </NavLink>
                    </section>
                </section>
                }
                
        </main>
    );
}

export default SetScore;