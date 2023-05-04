import style from './WatchedCard.module.scss';

function WatchedCard({show}) {

    

    return (         
        <article className={style.watchedCard}>
            <section className={style.watchedCard__poster}>
                <img src={show.poster} height='180px' />   
            </section>
            <h2>{show.title}</h2>
            <p>My score: {show.score + '/5'}</p>
        </article>
)}

export default WatchedCard;