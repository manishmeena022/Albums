import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';

export const AddAlbum = (props) => {
    const [userId, setUserId] = useState('');
    const [title, setTitle] = useState('');

    //this function get all the userId and title then call addalbum function to add  it in album list
    const addAlbumToList = () => {
        props.addAlbumToList(Number(userId), title);
        // Reset input fields after adding album
        setUserId('');
        setTitle('');
    };

    return (
        <>
            <Navbar path="/" page="Home" />
            <div className='addalbum-container'>
                <div className='addalbum-form'>
                    <h4>Enter New Album Details</h4>
                    <div className='inp-container'>
                        Enter User id :
                        <input
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            type='number'
                        />
                    </div>
                    <div className='inp-container'>
                        Enter Album Title :
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type='text'
                        />
                    </div>
                    <div>
                        <Link to="/"><button onClick={addAlbumToList}>Add to List</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};
