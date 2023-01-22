import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { pizzaApi } from "../../api/api";
import { addBasket, deleteBasket, getMyBuyPizzs, getPizzs, getSumBusket, toogleIsFetching } from "../../redux/reducers/pizzsReducers";
import Pizza from "./pizza/pizza";
import s from './pizzs.module.scss'


const Pizzs = (props) => {
    const dispath = useDispatch()
    const pizzs = useSelector(state => state.pizzsPage.pizzs)
    return <div className={s.pizzs}>
        <div className={s.pizzs__sort}>

        </div>
        <div className={s.pizzs__content}>
            <h1>Все пиццы</h1>
            <div className={s.pizzs__blocks}>
                {pizzs.map(el => <Pizza deleteBasket={() => {
                    dispath(deleteBasket(el.id))
                    dispath(getSumBusket())
                    pizzaApi.setIsBasketPizza(el.id, false)
                }} addBasket={() => {
                    dispath(addBasket(el.id))
                    dispath(getSumBusket())
                    pizzaApi.setIsBasketPizza(el.id, true)
                    dispath(getMyBuyPizzs())
                }} id={el.id} img={el.img} title={el.title} price={el.price} isBasket={el.isBasket} />)}
            </div>
        </div>
    </div>
}

export default Pizzs