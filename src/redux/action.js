export const batDauTimKiem = () => ({ type: 'BAT_DAU_TIM_KIEM' });

export const timKiemThanhCong = (cityName, temp) => ({ type: 'TIM_KIEM_THANH_CONG', cityName, temp});

export const timKiemThatBai = (error) => ({ type: 'TIM_KIEM_THAT_BAI', error });
