import React,{ useState } from 'react';
import albumList from './albumList';
import artistImages from "./artistImages";
import Navbar from './components/Navbar';
import {Button} from 'react-bootstrap';
import './App.css';

function App() {
  const [albums, setAlbums] = useState(albumList);

  const removeAlbum = (index) => {
    albums.splice(index,1);
    setAlbums([...albums]);
  };

  const addAlbum = (album) => {
    albums.push(album)
    setAlbums([...albums])
  };

  const [name, setName] = useState("");
  const [artist,setArtist] = useState("Nirvana");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newAlbum = {
      id:albums.length+1,
      albumName:name,
      albumCover:artistImages[artist],
      artist:artist
    }
    addAlbum(newAlbum);
    setAlbums([...albums]);
  }

  return (
    <div className="main">
      <Navbar/>
      <div className='container'>
        <h1>Albums</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Album Name:
            <input type='text' value={name} onChange={e=> setName(e.target.value)}/>
          </label>
          <select onChange={e => setArtist(e.target.value)}>
            <option value="Nirvana">Nirvana</option>
            <option value="Pink Floyd">Pink Floyd</option>
            <option value="Radiohead">Radiohead</option>
          </select>
          <input type="submit" value="Add" className="addAlbum"/>
        </form>
        <div className="albums">
          <div className="album-list">
            <h2>Radiohead</h2>
            <div className="in-row">
              {
                albums.map((album,index) => album.artist==="Radiohead" && <div key={album.id}>
                <img src={album.albumCover} alt="Cover" className="cover"/>
                <p>{album.albumName}</p>
                <p>{album.artist}</p>
                <Button className="remove" variant="danger" onClick={removeAlbum.bind(this,index)}>Remove</Button>
                </div> )
              }
            </div>
        </div>
        <div className="album-list">
            <h2>Nirvana</h2>
            <div className="in-row">
              {
                albums.map((album,index) => album.artist==="Nirvana" && <div key={album.id}>
                <img src={album.albumCover} alt="Cover" className="cover"/>
                <p>{album.albumName}</p>
                <p>{album.artist}</p>
                <Button className="remove" variant="danger" onClick={removeAlbum.bind(this,index)}>Remove</Button>
                </div> )
              }
            </div>
        </div>
        <div className="album-list">
            <h2>Pink Floyd</h2>
            <div className="in-row">
              {
                albums.map((album,index) => album.artist==="Pink Floyd" && <div key={album.id}>
                <img src={album.albumCover} alt="Cover" className="cover"/>
                <p>{album.albumName}</p>
                <p>{album.artist}</p>
                <Button className="remove" variant="danger" onClick={removeAlbum.bind(this,index)}>Remove</Button>
                </div> )
              }
            </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;
