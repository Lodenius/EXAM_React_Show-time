import { NavLink } from 'react-router-dom';
import style from './ShowCard.module.scss';

function ShowCard({show}) {


    return ( 
        <NavLink to={"/showinfo/" + show.id + '/' + show.title}>
            <article className={style.showCard}>
                <section className={style.showCard__poster}>
                    <img src={show.poster} height='180px' />   
                </section>
                <h2>{show.title}</h2>
                {/* <p>{show.score + '/5'}</p> */}
            </article>
        </NavLink>
     );
}

export default ShowCard;