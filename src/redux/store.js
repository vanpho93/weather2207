import { createStore } from 'redux';

const defaultState = {
    cityName: null,
    temp: null,
    isLoading: false,
    error: null
};

const reducer = (state = defaultState, action) => {
    return state;
};

const store = createStore(reducer);
export default store;
// WeatherMessage -> trang thai
/*

Khi vua khoi dong
Khi bat dau tim kiem
Khi tim kiem thanh cong
Khi tim kiem that bai

BAT DAU TIM KIEM
TIM KIEM THANH CONG
TIM KIEM THAT BAI

*/
