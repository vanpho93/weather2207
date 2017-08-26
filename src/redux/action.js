import getWeatherByCityNameAPI from '../api/getTempByCityName';

const batDauTimKiem = () => ({ type: 'BAT_DAU_TIM_KIEM' });

const timKiemThanhCong = (cityName, temp) => ({ type: 'TIM_KIEM_THANH_CONG', cityName, temp});

const timKiemThatBai = (error) => ({ type: 'TIM_KIEM_THAT_BAI', error });

export const getWeather = (cityName) => (
    function(dispatch) {
        dispatch(batDauTimKiem());
        getWeatherByCityNameAPI(cityName)
        .then(temp => dispatch(timKiemThanhCong(cityName, temp)))
        .catch(error => dispatch(timKiemThatBai('Cannot find your city!')));
    }
);
