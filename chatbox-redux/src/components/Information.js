import React, { useEffect, useState } from 'react'
import '../style/information.css'
import { Card, Tag, Button } from 'antd'
import { chatSelector } from '../store/userlist';
import { getUsers } from '../store/userlist/action';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const Information = ( props ) =>
{
    const [ selectedId, setSelectedId ] = useState()
    const [ selectedUser, setSelectedUser ] = useState()
    const [ firstUser, setFirstUser ] = useState()
    const { userList, pending } = useAppSelector( chatSelector );

    console.log( "information selectedId", selectedId )
    console.log( "information selectedUser", selectedUser )


    useEffect( () =>
    {
        setSelectedId( props.selectedId )
    }, [ props.selectedId ] )

    useEffect( () =>
    {
        if ( userList.length > 0 )
        {
            const selectedUser = userList.find( ( el ) => el.id === props.selectedId )
            console.log( "selectedUser", selectedUser )
            setSelectedUser( selectedUser )
            setFirstUser( userList[ 0 ] )
        }
    }, [ props.selectedId, userList ] )

    console.log( "information singleUser", firstUser )

    const { Meta } = Card;
    return (

        <div className='right-sight'>
            <div className='img'></div>
            <div className='email'>
                <div className='email-text'>EMAİL</div>
                <div>
                    { selectedUser ? selectedUser.email : firstUser?.email }
                </div>
            </div>
            <div className='phone'>
                <div className='email-text'>PHONE</div>
                <div>
                    { selectedUser ? selectedUser.phone : firstUser?.phone }
                </div>
            </div>

            <div className='label'>
                <h4 className='email-text'>LABELS</h4>
                { <Tag className='tag'>{ ( selectedUser && selectedUser.address ) ? selectedUser.address.city : ( ( firstUser && firstUser.address ) ? firstUser.address.city : "" ) }</Tag> }
            </div>

            <div className='attachment'>
                <h4 className='attachment-text'>ATTACHMENTS</h4>
                {
                    <div className='attachment-list'>
                        <ul><li>
                            { ( selectedUser && selectedUser.company ) ? selectedUser.company.name : ( ( firstUser && firstUser.company ) ? firstUser.company.name : "" ) }
                        </li></ul>
                    </div> }


                <div className="view-all-button">
                    <Button type="link">View All</Button>
                </div>
            </div>
            <br /><br />
            <div className='react-button'>
                <Button className="ReactButton" type="primary">React</Button>
            </div>
        </div>

    )
}

export default Information
