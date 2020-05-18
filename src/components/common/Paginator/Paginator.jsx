import React, {useState} from "react";
import styles from './paginator.module.css'

const Paginator = (props)=> {
    let pagesCount = Math.ceil(props.totalItemsCount / props.pageSize);

    const portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber]= useState(1);
    let leftPortionPageNumber = (portionNumber-1) * props.portionSize ;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
            <div>{portionNumber > 1 &&
                <button style={{backgroundColor: '#4CAF50'}} onClick={()=>{setPortionNumber(portionNumber-1)} }>Prev </button> }
                {pages.filter((p=>p < rightPortionPageNumber && p>leftPortionPageNumber))
                    .map(p => {
                    return <span key={p}
                        className={props.currentPage === p ? styles.selectedPage : null }
                        onClick={(e) => {
                        props.onPageChange(p);}}> {p} </span>
                })}
                { portionCount > portionNumber &&
                <button style={{backgroundColor: '#4CAF50'}} onClick={()=>{setPortionNumber(portionNumber+1)}}>Next </button> }
            </div>
    )
};


export default Paginator;