import style from './Splash.module.scss';
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';

function Splash() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/start')
        }, 2000);
    })

    
    return ( 
        <section className={style.splashContainer}>
            <section className={style.splashContainer__text}>
                <h1>Get the popcorn</h1>
                <h3>IT'S SHOW TIME</h3>
            </section>
            <section className={style.splashContainer__imageSection}>
                <img src="./imgs/popcorn.jpg" className={style.splashContainer__image} />
            </section>
        </section>
     );
}

export default Splash;