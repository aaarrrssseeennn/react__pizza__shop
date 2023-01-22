import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pizzaApi } from '../../api/api'
import { deleteAllMyPizzs, getBuyPizza, isGetBuyPizzs } from '../../redux/reducers/pizzsReducers'
import s from './profile.module.scss'
import ProfilePizzsCard from './profilePizzsCard/profilePizzsCard'
import { NavLink } from "react-router-dom";

const Profile = (props) => {
    const dispath = useDispatch()
    const myPizza = useSelector(state => state.pizzsPage.myPizzs)
    const isGetMyPizza = useSelector(state => state.pizzsPage.isGetMyPizza)
    useEffect(() => {
        if (!isGetMyPizza) {
            pizzaApi.getBuyPizza().then(res => {
                dispath(getBuyPizza(res))
            })
            dispath(isGetBuyPizzs(true))
        }
    })
    return <div className={s.Profile}>
        {myPizza.length == 0 ? <div className={s.Profile__isFalse}>
            <img className={s.Profile__isFalseImg} src="/img/basket/cryingEmoji.png" alt="" />
            <h1>У вас нет заказов</h1>
            <p>
                Вы нищеброд? <br />
                Оформите хотя бы один заказ.
            </p>
            <NavLink to='/'><button>
                <img src="/img/icons/backArrow.svg" alt="" />
                Вернуться назад
            </button></NavLink>
        </div>
            :
            <div className={s.Profile__isTrue}>
                <div className={s.title}>
                    <h1>Ваши покупки:</h1>
                    <span onClick={() => {
                        myPizza.forEach(el => {
                            pizzaApi.deletePizzaApi(el.id)
                        });
                        dispath(deleteAllMyPizzs())
                    }}>
                        Очистить историю
                    </span>
                </div>
                <div className={s.Profile__MyPizzs}>
                    {myPizza.map(el => <ProfilePizzsCard id={el.id} img={el.img} price={el.price} title={el.title} />)}
                </div>
            </div>
        }
    </div>
}

export default Profile