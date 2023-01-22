import { NavLink, useParams } from 'react-router-dom'
import s from './BoughtPizza.module.scss'

const BoughtPizza = (props) => {
    let idProfile = useParams().id
    return <div className={s.BoughtPizza}>
        <img src="/img/restImg/goodBought.jpg" alt="" className={s.BoughtPizza__img}/>
        <h1>Заказ оформлен!</h1>
        <p>Ваш заказ #{idProfile} скоро будет передан курьерской доставке</p>
        <NavLink className={s.NavLink} to='/'><button>
            <img src="/img/icons/backArrow.svg" alt="" />
            Вернуться назад
        </button></NavLink>
    </div>
}

export default BoughtPizza