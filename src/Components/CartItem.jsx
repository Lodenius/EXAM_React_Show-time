import React from 'react'
import { useDispatch } from 'react-redux';
import { buyCandy, removeCandy } from '../actions/candyActions';
import style from "./CartItem.module.scss";

export default function CartItem({ cartItem }) {
    const dispatch = useDispatch();
    return (
        <article className={style.container}>
            <section className={style.itemImage}></section>
            <section className={style.info}>
                <h3>{cartItem.name}</h3>
            </section>
            <section>
                <button onClick={() => dispatch(removeCandy(cartItem))}>-</button>
                <p>{cartItem.amount}</p>
                <button onClick={() => dispatch(buyCandy(cartItem))}>+</button>
            </section>
        </article>
    )
}
