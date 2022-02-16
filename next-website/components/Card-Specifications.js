import React from 'react'
import style from '../styles/Home.module.scss'

export default function Card_Specifications(props) {
    return (
        <card className={style.card_specification} >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d={props.path1}/>
                <path fillRule="evenodd" d={props.path2} clipRule="evenodd" />
            </svg>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </card>
    )
}

{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
</svg> */}

// M9 9a2 2 0 114 0 2 2 0 01-4 0z
// M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z