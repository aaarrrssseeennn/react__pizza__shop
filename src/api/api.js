import axios from "axios";

const instance = axios.create({
    baseURL: 'https://63c3fba1a9085635752f5009.mockapi.io/'
})


export const pizzaApi = {
    getPizzaApi(){
        return instance.get('pizzs').then(res => res.data)
    },
    deletePizzaApi(id){
        return instance.delete(`/MyPizzs/${id}`)
    },
    setIsBasketPizza(id, value){
        return instance.put(`pizzs/${id}`, {isBasket: value}).then(res => res.data)
    },
    getProfilePizza(id){
        return instance.get(`/pizzs/${id}`).then(res => res.data)
    },
    getBuyPizza(){
        return instance.get(`MyPizzs`).then(res => res.data)
    },
    postBuyPizza(obj){
        return instance.post(`MyPizzs`, obj).then(res => res.data)
    },
}
