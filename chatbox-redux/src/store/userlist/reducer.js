import { createReducer } from "@reduxjs/toolkit";
import { getUsers } from "./action";

const initialState = {
    userList: [], /*7-import ettiğim getUsers actionundan gelenlerle burası dolar ve getUsers fulfilled olur
    sonuç döndü bu sonucu alırım yani payload'ı userListe veririm 2 numara*/
    pending: false,
    error: false,
}
//pending istek gönderildikten istek sonuçlanana kadar geçen süre 

export const chatReducer = createReducer( initialState, ( builder ) =>
{
    builder
        .addCase( getUsers.pending, ( state ) =>//5-Sorgu yapılırken pending true yani bekleniyor.(Cevap dönünce false yani,fulfilled'ı false'a çekeriz)
        {
            state.pending = true;
        } )

        .addCase( getUsers.fulfilled, ( state, { payload } ) =>//1-actionda döndürdüğün data reducerda fulfilled'a payload olarak gelir 
        {
            state.pending = false
            state.userList = payload.slice( 0, 8 );//2-redux'ın state'i userList'e payload'ı koyarız. Diğer aşama bunu kodda nasıl kullanacağım
        } )

        .addCase( getUsers.rejected, ( state, { error } ) => //6- herhangi bir error durumunda rejected döner bu durumda da false olur pending
        {

            state.pending = false;//Not: //birden fazla reducer olduğunda statelerinin karışmaması adına combineReducers yapılmalı
            state.errorMessage = error.message || '';

        } );
} );

