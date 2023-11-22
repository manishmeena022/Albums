import React from 'react';
import {List} from "./List";
import { Navbar } from './Navbar';

export const AlbumsList = (props) => {
  return (
    <>  
        <div className='navbar'>
          <Navbar page="Add Album" path="/add-album" />
        </div>
        <div className='album'>
          <div className='albums-list' >
              {props.albums.map((album) => <List album={album} key={album.id} setUpdateAlbum={props.setUpdateAlbum} deleteAlbumFromList={props.deleteAlbumFromList} />)}
          </div>
        </div>
    </>
  )
}
