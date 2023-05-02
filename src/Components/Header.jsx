import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

function Header(props) {
    
    return ( 
        <header className={style.header}>
            <section className={style.header__headline}>
                <h1>SHOW TIME 🍿</h1>
            </section>

            <section className={style.header__links}>
                <section className={style.header__favs}>
                    <NavLink to='/start'>
                        <p>Watchlist</p>
                    </NavLink>
                </section>
                <section className={style.header__add}>
                    <NavLink to='/addshow'>
                        <p>Add</p>
                    </NavLink>
                </section>
                <section className={style.header__watched}>
                    <NavLink to='/watched'>
                        <p>Watched</p>
                    </NavLink>
                </section>

            </section>
            <section className={style.header__category}>
                <h2>{props.title}</h2>
            </section>

        </header>
     );
}

export default Header;