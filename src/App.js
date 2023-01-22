import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { pizzaApi } from './api/api';
import './App.scss';
import Basket from './components/basket/basket';
import Header from './components/header/header';
import Pizzs from './components/pizzs/pizzs';
import Profile from './components/profile/profile';
import ProfilePizza from './components/profilePizza/profilePizza';
import { getPizzs, toogleIsFetching } from './redux/reducers/pizzsReducers';
import BoughtPizza from './utils/validation/buyPizza/BoughtPizza';
import Prelorder from './utils/validation/prelorder';

function App() {
  const dispath = useDispatch()
  const isFetching = useSelector(state => state.pizzsPage.isFetching)
  const pizzs = useSelector(state => state.pizzsPage.pizzs)
  useEffect(() => {
    if (pizzs.length == 0) {
      dispath(toogleIsFetching(true))
      pizzaApi.getPizzaApi().then(el => {
        dispath(getPizzs(el))
        dispath(toogleIsFetching(false))
      })
    }
  })

  return (
    <>
      {!isFetching ? <div className="App">
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Pizzs />}></Route>
            <Route path='/basket' element={<Basket />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/pizzaProfile/:id' element={<ProfilePizza />}></Route>
            <Route path='/boughtPizza/:id' element={<BoughtPizza />}></Route>
          </Routes>
        </div>
      </div>
        :
        <Prelorder />}
    </>
  );
}

export default App;
