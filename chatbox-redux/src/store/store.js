import { configureStore } from '@reduxjs/toolkit';
import { chatReducer } from './userlist/reducer';

const store = configureStore( {
    reducer: {
        chat: chatReducer,
    },
} );

export default store;
/*bir depo oluşturuluyor store'da.
statelerin asıl güncellenip çıktı aldığımız yer olan reducer'da burada import ediliyor ve
reducerdan gelen değeri alan oluşan store buradan export ediliyor */