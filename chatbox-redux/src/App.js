import React from 'react'
import { useState, useEffect } from 'react';
import Chatbot from './components/Chatbot';
import AllMessages from './components/AllMessages';
import Information from './components/Information';
import '../src/style/app.css'
import { chatSelector } from './store/userlist';
import { getUsers } from './store/userlist/action';
import { useAppDispatch, useAppSelector } from './store/hooks';

const App = () =>
{
  const [ selectedId, setSelectedId ] = useState();

  const dispatch = useAppDispatch(); //8- getUsers'ı action'ı dispatch ile çağırırım çalıştırırım.işini bitiren getUsers userList'i useEffect ile günceller app'te 
  const { userList, pending } = useAppSelector( chatSelector ); //4-burada store'un selector'ünü çekiyorum çünkü selector'de redux'ın state'i yer alıyor
  //not: pending bekleme durumunda bilgi vermek loading vs demek istersem diye burada pendingi de deconstruct edebilirim

  useEffect( () =>
  {
    dispatch( getUsers() )
  }, [] )

  useEffect( () =>
  {
    console.log( "userList", userList )
  }, [ userList ] )

  useEffect( () =>
  {
    console.log( selectedId )
  }, [ selectedId ] )

  //console.log( "selectedId", typeof selectedId )

  const puller = ( userId ) => 
  {
    setSelectedId( userId )
  }//child component'den parent componentime seçilen id bilgisini gönderebilmek için yazdığım fonksiyon

  return (
    <>
      <div className='app'>
        <AllMessages puller={ puller } />
        <Chatbot selectedId={ selectedId } />
        <Information selectedId={ selectedId } />
      </div>
    </>
  )
}

export default App
