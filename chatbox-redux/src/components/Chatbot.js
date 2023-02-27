import React, { useEffect, useState } from 'react'
import { Space, Card, Tag, Avatar, List, Button, Input, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { SettingOutlined, PaperClipOutlined, SmileOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css';
import '../style/chatbot.css'
import { chatSelector } from '../store/userlist';
import { getUsers } from '../store/userlist/action';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Chatbot = ( props ) =>
{
    const [ selectedId, setSelectedId ] = useState()
    const [ selectedUser, setSelectedUser ] = useState()
    const [ firstUser, setFirstUser ] = useState()
    const { userList, pending } = useAppSelector( chatSelector );

    console.log( "chatbot props", props )
    console.log( "chatbota gelen selectedId", props.selectedId )
    // console.log( "chatbota gelen users", props.users )

    useEffect( () =>
    {
        setSelectedId( props.selectedId )

    }, [ props.selectedId ] )


    useEffect( () =>
    {
        if ( userList.length > 0 )
        {
            const selectedUser = userList.find( ( el ) => el.id === props.selectedId ) //tüm kullanıcılar içinden seçili olan kullanıcıyı çekmek için find metodunu kullandım 
            console.log( "selectedUser", selectedUser )
            setSelectedUser( selectedUser )//bulunanan dönen, yani seçilen kullanıcıyı state'imin setterına atıp güncelliyorum
            setFirstUser( userList[ 0 ] )
            // console.log( props.selectedId )
        }
    }, [ props.selectedId, userList ] )

    console.log( "chatbot'a gelen singleUser", firstUser );

    // console.log( "chatbot usersLog", usersLog )
    // console.log( "users", users )
    // console.log( "users type", typeof users )
    // console.log( "usersLog", usersLog )

    return (
        <>
            <div className='header'>
                <List
                    itemLayout="horizontal"
                    dataSource={ selectedId ? [ selectedUser ] : ( firstUser ? [ firstUser ] : [] ) } //selected yapıldıysa seçilen kullanıcı gelsin yapılmadıysa her zaman listin ilk kullanıcısı gelsin 
                    renderItem={ ( item ) => (

                        <List.Item>
                            <List.Item.Meta
                                style={ { width: '340px' } }
                                avatar={ <Avatar src={ `https://i.pravatar.cc/150?img=${ item.id }` } /> }
                                title={ <a>{ item.name }</a> }
                                description={ item.email }
                            />
                        </List.Item>
                    ) }
                />

            </div>

            <div className='text-area'>
                <div className='body'>
                    <div className='chatbox1'><p className='cb1-text'>Hi! My name’s Botty.</p></div>
                    <div className='chatbox2'><p className='cb2-text'>Hi Botty! How are you?</p></div>
                    <div className='chatbox3'><p className='cb3-text'>Living the dream.</p></div>
                </div>
                <div className='footer'>
                    <div className='input'>
                        <Input placeholder="Write a message..." bordered={ false } />
                    </div>

                    <div className='footer-buttons'>
                        <Button type="link" icon={ <SmileOutlined /> } ></Button>
                        <Button type="link" icon={ <PaperClipOutlined /> } ></Button>
                        <Button type="link">Send</Button>
                    </div>

                </div>
                {/* <Divider className="devider" /> */ }
            </div>




        </>
    )
}

export default Chatbot
