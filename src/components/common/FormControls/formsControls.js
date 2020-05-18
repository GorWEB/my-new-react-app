import React from "react";
import styles from './formsControls.module.css';

// const FormControls = ({input,meta,...props})=>{
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={styles.formControl + ' '+ (hasError ? styles.error: null)} >
//             <div> {props.children} </div>
//             {hasError && <span> {meta.error} </span>}
//         </div>
//     )
// }

export const ElementCreator = Element =>({input,meta,...props})=>{
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + ' '+ (hasError ? styles.error: null)} >
            <div> <Element {...props} {...input} /> </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    )
};