import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

export const UpdateAlbum = (props) => {
    const [updateTitle, setUpdateTitle] = useState('');
    const [updateUserId, setUpdateUserId] = useState('');

    //this will get update album
    const getUpdateData = () => {
        const id = props.album.id;
        const updatedTitle = updateTitle !== '' ? updateTitle : props.album.title;
        const updatedUserId = updateUserId !== '' ? Number(updateUserId) : props.album.userId;

        props.updateAlbumInList(id, updatedTitle, updatedUserId, props.album);
    };

    return (
        <>
            <Navbar path="/" page="Home" />
            <div className='update-album'>
                <h4>Title : {props.album.title}</h4>
                <div className='inp-container'>
                    Enter New Title : 
                    <input
                        type='text'
                        id='title-inp'
                        value={updateTitle}
                        onChange={(e) => setUpdateTitle(e.target.value)}
                    />
                </div>
                <h4>User Id: {props.album.userId}</h4>
                <div className='inp-container'>
                    Enter New UserId :
                    <input
                        type='number'
                        id='userid-inp'
                        value={updateUserId}
                        onChange={(e) => setUpdateUserId(e.target.value)}
                    />
                </div>
                <Link to="/"><button type='submit' onClick={getUpdateData}>Save</button></Link>
            </div>
        </>
    );
};
