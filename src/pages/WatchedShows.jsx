import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from './WatchedShows.module.scss';
import Header from "../Components/Header";
import ShowCard from "../Components/ShowCard";

function WatchedShows() {
    const [shows, setShows] = useState([]);
    const state = useSelector((state) => state);

    useEffect(() => {
        setShows(state.shows);
    }, [state]);

    return (
        <main>
            <Header title='Watched shows'/>
            {/* {
                shows && shows.map((show) =>
                    <ShowCard key={show.id} show={show}/>)
            } */}
        </main>
    );
}

export default WatchedShows;