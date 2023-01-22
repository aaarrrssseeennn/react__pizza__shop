import { pizzaApi } from "../../api/api"

const ADD_BASKET = 'ADD_BASKET'
const DELETE_BASKET = 'DELETE_BASKET'
const DELETE_ALL_ELEM_BASKET = 'DELETE_ALL_ELEM_BASKET'
const GET_SUM_BASKET = 'GET_SUM_BASKET'
const GET_PIZZS = 'GET_PIZZS'
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING'
const SET_PROFILE_PIZZA = 'SET_PROFILE_PIZZA'
const GET__BUY__PIZZA = 'GET__BUY__PIZZA'
const IS__GET__BUY__PIZZA = 'IS__GET__BUY__PIZZA'
const GET_MY_BUY_PIZZA = 'GET_MY_BUY_PIZZA'
const DELETE_ALL_MY_PIZZS = 'DELETE_ALL_MY_PIZZS'

const copyState = {
    pizzs: [
    ],
    sumBasket: 0,
    isFetching: false,
    profile: {
    },
    myPizzs: [
    ],
    isGetMyPizza: false,
}


const PizzsReducers = (state = copyState, action) => {
    switch (action.type) {
        case DELETE_ALL_MY_PIZZS:
            
            return { ...state, myPizzs: [] }
            break;
        case TOOGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
            break;
        case IS__GET__BUY__PIZZA:
            return { ...state, isGetMyPizza: action.isGetMyPizza }
            break;
        case SET_PROFILE_PIZZA:
            return { ...state, profile: action.profile }
            break;
        case GET_PIZZS:
            return { ...state, pizzs: action.pizzs }
            break;
        case GET__BUY__PIZZA:
            return { ...state, myPizzs: action.myPizzs }
            break;
        case ADD_BASKET:
            const PizzsCopy = [...state.pizzs]
            PizzsCopy[state.pizzs.indexOf(state.pizzs.find(el => el.id == action.id))].isBasket = true
            return { ...state, pizzs: PizzsCopy }
            break;
        case DELETE_BASKET:
            const delPizzsCopy = [...state.pizzs]
            delPizzsCopy[state.pizzs.indexOf(state.pizzs.find(el => el.id == action.id))].isBasket = false
            return { ...state, pizzs: delPizzsCopy }
            break;
        case DELETE_ALL_ELEM_BASKET:
            const delAllPizzsCopy = [...state.pizzs]
            delAllPizzsCopy.forEach(el => {
                el.isBasket = false
                pizzaApi.setIsBasketPizza(el.id, false)
            })
            return { ...state, pizzs: delAllPizzsCopy }
            break;
        case GET_SUM_BASKET:
            let sum = 0;
            state.pizzs.forEach(el => {
                if (el.isBasket) {
                    sum += el.price
                }
            })
            return { ...state, sumBasket: sum }
            break;
        default:
            return state
            break;
    }
}


export const deleteAllMyPizzs = () => {
    return { type: DELETE_ALL_MY_PIZZS}
}
export const getMyBuyPizzs = () => {
    return { type: GET_MY_BUY_PIZZA}
}
export const isGetBuyPizzs = (isGetMyPizza) => {
    return { type: IS__GET__BUY__PIZZA, isGetMyPizza: isGetMyPizza }
}
export const getPizzs = (pizzs) => {
    return { type: GET_PIZZS, pizzs: pizzs }
}
export const addBasket = (id) => {
    return { type: ADD_BASKET, id: id }
}
export const deleteBasket = (id) => {
    return { type: DELETE_BASKET, id: id }
}
export const deleteAllElemBasket = () => {
    return { type: DELETE_ALL_ELEM_BASKET }
}
export const getSumBusket = () => {
    return { type: GET_SUM_BASKET }
}
export const toogleIsFetching = (isFetching) => {
    return { type: TOOGLE_IS_FETCHING, isFetching }
}

export const setProfile = (profile) => {
    return { type: SET_PROFILE_PIZZA, profile }
}

export const getBuyPizza = (myPizzs) => {
    return { type: GET__BUY__PIZZA, myPizzs }
}


export default PizzsReducers