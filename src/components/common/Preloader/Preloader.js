import styles from "../../Users/users.module.css";
import React from "react";
import preloader from '../../../images/Preloader.gif';

let Preloader = (props)=> {
    return (
        <div className={styles.preloaderDiv}>
    <img className={styles.preloader} src={preloader} alt={'Preloader'}/>
            <span>Идет загрузка странцы!</span>
        </div>
    )
};

export default Preloader;