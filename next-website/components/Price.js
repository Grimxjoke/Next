import React from 'react'
import style from '../styles/Home.module.scss'
import Price_Card from './Price-Card'
import Card_Specifications from './Card-Specifications';


export default function Price() {
    return (
        <div className={style.price_title}>
            <h1>Choisissez la rencontre qui vous correspond</h1>
            <h3>Choissisez un plan et prennez rendez vous avec moi</h3>
            <div className={style.price}>
                <card className={style.card_1}>
                    <Price_Card/>
                </card>

                <card className={style.card_2}>
                    <Price_Card/>
                </card>

                <card className={style.card_3}>
                    <Price_Card/>
                </card>

                
            </div>
        </div>
    )
}
