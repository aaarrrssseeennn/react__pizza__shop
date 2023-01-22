import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getSumBusket } from "../../redux/reducers/pizzsReducers";
import s from './header.module.scss'

const Header = (props) => {
    let dispath = useDispatch()
    const sum = useSelector(state => state.pizzsPage.sumBasket)
    dispath(getSumBusket())
    return <div className={s.Header}>
        <div className={s.header__logo}>
            <NavLink to=''>
                <img src="/img/logo.svg" alt="" />
            </NavLink>
            <div className={s.logo__title}>
                <h3>REACT PIZZA</h3>
                <p>самая вкусная пицца во вселенной</p>
            </div>
        </div>
        <ul className={s.header__buttons}>
            <li>
                <NavLink to='/basket' className={s.NavLink}>
                    <img src="/img/icons/basket.svg" alt="" />
                    <span>{sum} руб.</span>
                </NavLink>
            </li>
            <li>
                <NavLink to='/profile'>
                    <img src="/img/icons/profile.svg" alt="" />
                </NavLink>
            </li>
        </ul>
    </div>
}

export default Header