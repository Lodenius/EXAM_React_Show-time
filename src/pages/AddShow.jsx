import style from './AddShow.module.scss';
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addShow } from "../actions/showActions";
import Inputfield from "../Components/Inputfield";
import Header from "../Components/Header";
import Button from "../Components/Button";

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
            poster: posterInput,
            score: ""
        }
        console.log(newShowObj);
        dispatch(addShow(newShowObj));

    }
    
    // const handleClick = () => {
    //     setTitleInput("");
    //     setChannelInput("");
    //     setSeasonsInput("");
    //     setPosterInput("");
    //   };
    
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
                {/* <Inputfield label='Title' type='text' value={titleInput} onChange={(e) => setTitleInput(e.target.value)}/>
                <Inputfield label='Channel' type='text' value={channelInput} onChange={(e) => setChannelInput(e.target.value)}/>
                <Inputfield label='Seasons' type='number' value={seasonsInput} onChange={(e) => setSeasonsInput(e.target.value)}/>
                <Inputfield label='Poster' type='text' value={posterInput} onChange={(e) => setPosterInput(e.target.value)}/> */}
            </form>
                <Button title='Add show' action={() => addNewShow()} />
        </section>
     );
}

export default AddShow;