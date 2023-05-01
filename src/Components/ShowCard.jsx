import { NavLink } from 'react-router-dom';
import style from './ShowCard.module.scss';

function ShowCard({show}) {


    return ( 
        <NavLink to={"/showinfo/" + show.id}>
            <article className={style.showCard}>
                <section className={style.showCard__poster}>
                    <img src={show.poster} height='180px' />   
                </section>
                <h2>{show.title}</h2>
            </article>
        </NavLink>
     );
}

export default ShowCard;