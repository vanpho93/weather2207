import { createStore } from 'redux';

const defaultState = {
    cityName: null,
    temp: null,
    isLoading: false,
    error: null
};

const reducer = (state = defaultState, action) => {
    const batDauTimKiem = { cityName: null, temp: null, isLoading: true, error: null};
    const timKiemThanhCong = { cityName: action.cityName, temp: action.temp, isLoading: false, error: null};
    const timKiemThatBai = { cityName: null, temp: null, isLoading: false, error: action.error};
    if (action.type === 'BAT_DAU_TIM_KIEM') return batDauTimKiem;
    if (action.type === 'TIM_KIEM_THANH_CONG') return timKiemThanhCong;
    if (action.type === 'TIM_KIEM_THAT_BAI') return timKiemThatBai;
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
