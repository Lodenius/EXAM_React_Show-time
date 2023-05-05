import { useDispatch } from 'react-redux';
import style from './WatchedCard.module.scss';
import { setScore } from '../actions/showActions';
import { useState } from 'react';
import Button from './Button';

function WatchedCard({show}) {
    const [changeInput, setChangeInput] = useState(false);
    const [newScore, setNewScore] = useState(show.score);
    const dispatch = useDispatch();

    function handleNewScore() {
        dispatch(setScore(show, "", newScore));
        setChangeInput(false);
    }

    
    
    return (         
        <article className={style.watchedCard}>
            <section className={style.watchedCard__poster}>
                <img src={show.poster} height='180px' />   
            </section>
            <h2>{show.title}</h2>
            <p>My score:</p>

{changeInput ?
        <>
            <input type='number' defaultValue={show.score} onChange={(e) => setNewScore(e.target.value)} />
            <Button title="!" action={handleNewScore} />
        </>
        : <p onClick={() => setChangeInput(true)}>{show.score}</p>}

            {/* <section className={style.myScore}>
                <p>{show.score}</p>
                <p> / 5</p>
            </section> */}
        </article>
)}

export default WatchedCard;