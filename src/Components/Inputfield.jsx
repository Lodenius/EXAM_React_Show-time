import style from './Inputfield.module.scss';

function Inputfield(props) {
    return ( 
        <main className={style.inputFields}>
            <section className={style.label}>
                <label>{props.label}: </label>
            </section>
            <section className={style.input}>
                <input type={props.type} value={props.value} onChange={(e) => props.action(e.target.value)} min="1" max="30"/>
            </section>
        </main>

     );
}

export default Inputfield;