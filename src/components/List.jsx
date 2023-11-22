import React from 'react';
import { Link } from "react-router-dom";

export const List = (props) => {
  return (
    <div className='list'>
        <h2>{props.album.title}</h2>
        <div className='button-group'>
            <Link to="/update-album">
                <button className='update-btn' onClick={() => props.setUpdateAlbum(props.album)}>Update</button>
            </Link>
            <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}>Delete</button>
        </div>
    </div>
  )
}
