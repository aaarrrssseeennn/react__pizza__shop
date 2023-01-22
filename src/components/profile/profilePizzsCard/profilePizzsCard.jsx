import { NavLink } from 'react-router-dom'
import s from './profilePizzsCard.module.scss'

const ProfilePizzsCard = (props) => {
    return <div className={s.pizza__card}>
        <NavLink to={`/reviewMyPizzs${props.id}`}>
            <img src={props.img} alt="" />
        </NavLink>
        <h2>{props.title}</h2>
        <div className={s.card__price}>
            <h3>{props.price} ₽</h3>
            <NavLink className={s.NavLink} to={`/reviewMyPizzs${props.id}`}><button>Подробнее</button></NavLink>
        </div>
    </div>
}

export default ProfilePizzsCard