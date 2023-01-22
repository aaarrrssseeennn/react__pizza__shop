import { NavLink } from 'react-router-dom'
import s from './pizza.module.scss'

const Pizza = (props) => {

    return <div className={s.pizza__card}>
        <NavLink to={`pizzaProfile/${props.id}`}>
            <img src={props.img} alt="" />
        </NavLink>
        <h2>{props.title}</h2>
        <div className={s.card__price}>
            <h3>от {props.price} ₽</h3>
            {
                !props.isBasket ? <button className={s.buttonNoActive} onClick={() => { props.addBasket(props.id) }}><span>+</span> Добавить</button> : <button onClick={() => { props.deleteBasket() }} className={s.buttonActive}><span>+</span> Добавить</button>
            }
        </div>
    </div>
}

export default Pizza