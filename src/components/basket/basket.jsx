import s from './basket.module.scss'
import BasketBlock from './basketBlock/basketBlock'
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { deleteAllElemBasket, deleteBasket, getMyBuyPizzs, getSumBusket, isGetBuyPizzs } from '../../redux/reducers/pizzsReducers';
import { pizzaApi } from '../../api/api';

const Basket = (props) => {
    const dispath = useDispatch()
    const pizzs = useSelector(state => state.pizzsPage.pizzs)
    const sum = useSelector(state => state.pizzsPage.sumBasket)

    const basketPizzs = pizzs.filter(el => el.isBasket == true)
    return <div className={s.Basket}>
        <div className={s.basket__content}>
            {basketPizzs.length !== 0 ? <div className={s.basket_isTrue}>
                <div className={s.basket__header}>
                    <div className={s.basket__Title}>
                        <img src="/img/icons/basketBlack.svg" alt="" />
                        <h1>Корзина</h1>
                    </div>
                    <div className={s.basket__btn}>
                        <img src="/img/icons/clean.svg" alt="" />
                        <span onClick={() => { 
                            dispath(deleteAllElemBasket())
                         }}>Очистить корзину</span>
                    </div>
                </div>
                <div className={s.basket__blocks}>
                    {basketPizzs.map(el => <BasketBlock deleteElem={() => {
                        dispath(deleteBasket(el.id))
                        dispath(getSumBusket(el.id))
                        pizzaApi.setIsBasketPizza(el.id, false)
                    }} title={el.title} id={el.id} price={el.price} img={el.img} />)}
                </div>
                <div className={s.basket__info}>
                    <p>
                        Всего пицц: <b>{basketPizzs.length} шт.</b>
                    </p>
                    <p>
                        Сумма заказа: <span>{sum} ₽</span>
                    </p>
                </div>
                <div className={s.basket__description}>
                    <NavLink className={s.NavLink} to='/'><button className={s.basket__back}><img src="/img/icons/back.svg" alt="" />Вернуться назад</button></NavLink>
                    <button className={s.basket__goPay} onClick={() => {
                        basketPizzs.forEach(el => {
                            pizzaApi.postBuyPizza(el)
                        });
                        dispath(isGetBuyPizzs(false))
                        dispath(deleteAllElemBasket())
                    }}>Оплатить сейчас</button>
                </div>
            </div>
            :
            <div className={s.basket__isFalse}>
                <h1>Корзина пустая <img src="/img/basket/sadEmoji.png" alt="" /></h1>
                <p>
                    Вероятней всего, вы не заказывали ещё пиццу. <br />
                    Для того, чтобы заказать пиццу, перейди на главную страницу.
                </p>
                <p></p>
                <img className={s.basket__isFalseImg} src="/img/basket/basketNull.svg" alt="" /><br />
                <NavLink to='/'><button>Вернуться назад</button></NavLink>
            </div>
            }
        </div>
    </div>
}

export default Basket