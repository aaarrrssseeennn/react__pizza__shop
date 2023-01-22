import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink, redirect, useParams } from 'react-router-dom'
import { pizzaApi } from '../../api/api';
import { addBasket, deleteBasket, getSumBusket, isGetBuyPizzs, setProfile, toogleIsFetching } from '../../redux/reducers/pizzsReducers';
import Prelorder from '../../utils/validation/prelorder';
import s from './profilePizza.module.scss'


const ProfilePizza = () => {
    let profilePizza = useSelector(state => state.pizzsPage.profile)
    const isFetching = useSelector(state => state.pizzsPage.isFetching)

    let idProfile = useParams().id
    let dispath = useDispatch()
    useEffect(() => {
        if (Object.keys(profilePizza).length == 0 || profilePizza.id !== idProfile) {
            dispath(toogleIsFetching(true))
            pizzaApi.getProfilePizza(idProfile).then((res) => {
                dispath(setProfile(res))
                dispath(toogleIsFetching(false))
            })
        }
    })
    return <>
        {!isFetching ?
            <div className={s.profilePizza}>
                <img src={profilePizza.img} alt="" />
                <div className={s.pizza__info}>
                    <h1 className={s.info__title}>{profilePizza.title}</h1>
                    <p className={s.info__description}>{profilePizza.descriion}</p>
                    <div className={s.info__pizzaСomposition}>
                        <h3>Состав: </h3>
                        <ul>
                            {profilePizza?.composition?.map(el => <li>{el}</li>)}
                        </ul>
                    </div>
                    <h1 className={s.info__price}>от {profilePizza.price} ₽</h1>
                    <NavLink to={`/boughtPizza/${profilePizza.id}`}>
                        <button className={s.info__btn} onClick={() => {
                            dispath(deleteBasket(profilePizza.id))
                            pizzaApi.postBuyPizza(profilePizza)
                            dispath(isGetBuyPizzs(false))
                        }}>Купить</button>
                    </NavLink>
                </div>
            </div>
            : <Prelorder />}
    </>
}

export default ProfilePizza