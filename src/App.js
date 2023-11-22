import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AlbumsList } from './components/AlbumsList';
import { UpdateAlbum } from './components/UpdateAlbum';
import { AddAlbum } from './components/AddAlbum';


function App() {
  const [albums, setAlbums] = useState([]);
  const [updateAlbum , setUpdateAlbum] = useState([]);

  //this wil fetch albums from Api
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/albums');
      const data = await response.json();
      setAlbums(data);
    }catch(error){
      console.error('Error in fetching :', error);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);


  //this will delete the selected album
  const deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,
    { 
      method : 'DELETE'
    })
    .then(() => {
      const newAlbums = albums.filter((album) => album.id !== id);
      setAlbums(newAlbums);
      alert('Your Album Deleted successfully');
    })
    .catch((error) => console.error('Error deleting album:', error));
  };

  //this will update the selected album
  const updateAlbumInList = async (id,updateTitle , updateUserId, oldAlbum) => {
    let updateAlbum = {};

    if(id < 100) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`,{
          method: 'PUT',
          body: JSON.stringify({
            userId: updateUserId,
            id: id,
            title: updateTitle,
          }),
          headers: {
            'Content-type' : 'application/json; charset=UTF-8',
          },
        });
        updateAlbum = await response.json();
      }catch(error){
        console.error('Error in updating album:',error);
      }
    }else {
      updateAlbum = {
        userId: updateUserId,
        id : id,
        title: updateTitle,
      };
    }

  const updateAlbums = [...albums];
  const index = updateAlbums.indexOf(oldAlbum);
  updateAlbums[index] = updateAlbum;

  setAlbums(updateAlbums);
  alert('Update Successfully done');
};


//this will add Album to the list
const addAlbumToList = (userId, title) => {
  fetch('https://jsonplaceholder.typicode.com/albums', {
    method: 'POST',
    body: JSON.stringify({
      id: albums.length + 1,
      title: title,
    }),
    headers: {
      'Content-type' : 'application/json; charset=UTF-8',
    },
  })
  .then(()=> {
    const newAlbums = { 
      userId : userId,
      id: albums.length + 1,
      title : title,
    };
    setAlbums([...albums, newAlbums]);
    alert("New Album added successfully in the bottom");
  })
  .catch((error) =>  console.error("Error adding album:", error));
};

  return (
    <>
        <Routes>
          <Route path='/' element={<AlbumsList albums={albums} setUpdateAlbum={setUpdateAlbum} deleteAlbumFromList={deleteAlbumFromList} />}></Route>
          <Route path='/add-album' element={<AddAlbum addAlbumToList={addAlbumToList} />}></Route>
          <Route path='/update-album' element={<UpdateAlbum album={updateAlbum} updateAlbumInList={updateAlbumInList} />}></Route>
        </Routes>
     </>
  );
}

export default App;
