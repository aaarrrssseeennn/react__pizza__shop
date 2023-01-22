import s from './basketBlock.module.scss'

const BasketBlock = (props) => {
    return <div className={s.basket__block}>
        <img className={s.basket__pizzaImg} src={props.img} alt="" />
        <h3>{props.title}</h3>
        <h2>{props.price} ₽</h2>
        <button onClick={() => {props.deleteElem()}}><img src="/img/icons/close.svg" alt="" /></button>
    </div>
}

export default BasketBlock