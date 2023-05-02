import { useEffect, useState } from "react";
import Inputfield from "../Components/Inputfield";
import { useSelector } from "react-redux";
import Header from "../Components/Header";
import style from './AddShow.module.scss';
import Button from "../Components/Button";
import { NavLink, useNavigate } from "react-router-dom";

function AddShow() {
    const navigate = useNavigate();
    const [shows, setShows] = useState([]);
    const [showsFromStore, setShowsFromStore] = useState([]);

    const state = useSelector((state) => {
        return state;
    });
    
    useEffect(() => {
        setShows(state.shows);
        setShowsFromStore(state.shows);
    }, [state]);

    const [titleInput, setTitleInput] = useState("");
    const [channelInput, setChannelInput] = useState("");
    const [seasonsInput, setSeasonsInput] = useState("");
    const [posterInput, setPosterInput] = useState("");

    function addNewShow(){
        let newShowObj = {
            title: titleInput,
            channel: channelInput,
            seasons: seasonsInput,
            poster: posterInput,
        }
        setShows([newShowObj, ...shows]);
        setTitleInput('');
        setChannelInput('');
        setSeasonsInput('');
        setPosterInput('');
    }

    // console.log(shows);

    return ( 
        <section className={style.addNewShow}>
            <Header title="Add a new show"/>
            <div className={style.roundImage}>
                <img src="./imgs/tv.png"/>
            </div>
            <section className={style.inputFields} >
                <Inputfield label='Title' type='text' action={setTitleInput} value={titleInput}/>
                <Inputfield label='Channel' type='text' action={setChannelInput} value={channelInput}/>
                <Inputfield label='Seasons' type='number' action={setSeasonsInput} value={seasonsInput}/>
                <Inputfield label='Poster' type='text' action={setPosterInput} value={posterInput}/>
            </section>
            <Button title='Add show' action={addNewShow}/>
        </section>
     );
}

export default AddShow;