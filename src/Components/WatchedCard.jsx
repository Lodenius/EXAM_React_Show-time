import style from './WatchedCard.module.scss';

function WatchedCard({show}) {
    
    return (         
        <article className={style.watchedCard}>
            <section className={style.watchedCard__poster}>
                <img src={show.poster} height='180px' />   
            </section>
            <h2>{show.title}</h2>
            <h3>My score:</h3>
            <section className={style.myScore}>
                <p className={style.myScore__score}>{show.score} </p>
                <p> / 5 ★</p>
            </section>
        </article>
)}

export default WatchedCard;