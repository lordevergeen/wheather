import React from 'react';
import styles from "../Header/Header.module.css";
import axios from "axios";

const Form = ({setCurrent , setFiveDays, setDate, isLight }) => {
    const getWeatherUseCityName = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${e.target[0].value}&appid=4fc6a6a2f9b17d070757a73824b04d64`)
            .then(({data}) => setCurrent(data))
            .catch(() => alert('Увы такого города нет, попробуйте заново !'));

        axios(`api.openweathermap.org/data/2.5/forecast?q=${e.target[0].value}&appid=4fc6a6a2f9b17d070757a73824b04d64`)
            .then(({data}) => {
                setFiveDays(data.list);
        setDate(data.list[0].dt_txt.slice(0, 10))
    } )
            .catch(() => alert('Увы такого города нет, попробуйте заново  5!'));
        e.target[0].value= ''
    };



    return (
        <form className={styles.form} onSubmit={getWeatherUseCityName}>
            <input placeholder='write city...' className={`${styles.input} ${isLight ? styles.light : ''}`} type="search" required/>
            <button className={`${styles.button} ${isLight ? styles.light : ''}`} type='submit'>Search</button>
        </form>
    );
};

export default Form;