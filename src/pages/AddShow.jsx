import style from './AddShow.module.scss';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addShow } from "../actions/showActions";
import Inputfield from "../Components/Inputfield";
import Header from "../Components/Header";
import Button from "../Components/Button";
import { NavLink } from 'react-router-dom';

function AddShow() {
    const dispatch = useDispatch();

    const [titleInput, setTitleInput] = useState("");
    const [channelInput, setChannelInput] = useState("");
    const [seasonsInput, setSeasonsInput] = useState("");
    const [posterInput, setPosterInput] = useState("");

    function addNewShow(){
        let newShowObj = {
            title: titleInput,
            channel: channelInput,
            seasons: seasonsInput,
            poster: posterInput || 'https://cdn3.vectorstock.com/i/1000x1000/92/27/party-and-show-poster-template-concert-vector-28149227.jpg',
            score: 0,
            episodes: 0
        }
        dispatch(addShow(newShowObj));
    }
    
    return ( 
        <section className={style.addNewShow}>
            <Header title="Add a new show"/>
            <div className={style.roundImage}>
                <img src="./imgs/tv.png"/>
            </div>
            <form className={style.inputFields}>
                <Inputfield label='Title' type='text' onChange={(e) => setTitleInput(e.target.value)}/>
                <Inputfield label='Channel' type='text' onChange={(e) => setChannelInput(e.target.value)}/>
                <Inputfield label='Seasons' type='number' onChange={(e) => setSeasonsInput(e.target.value)}/>
                <Inputfield label='Poster' type='text' onChange={(e) => setPosterInput(e.target.value)}/>
            </form>
            <NavLink to='/start'>
                <Button title='Add show' action={() => addNewShow()} />
            </NavLink>
        </section>
     );
}

export default AddShow;