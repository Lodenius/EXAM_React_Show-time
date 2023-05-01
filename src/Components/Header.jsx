
import style from './Header.module.scss';

function Header(props) {
    
    return ( 
        <header className={style.header}>
            <section className={style.header__headline}>
                <h1>SHOW TIME 🍿</h1>
            </section>

            <section className={style.header__links}>
                <section className={style.header__favs}>
                    <p>Faves</p>
                </section>

                <section className={style.header__watched}>
                    <p>Watched</p>
                </section>

                <section className={style.header__add}>
                    <p>Add</p>
                </section>
            </section>
            <section className={style.header__category}>
                <h2>{props.title}</h2>
            </section>

        </header>
     );
}

export default Header;