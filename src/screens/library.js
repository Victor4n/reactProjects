import React, { useEffect, useState } from 'react';
import APIKit from "../spotify";
import "./library.css";

export default function Library() {
  
  const [playlists, setPlayLists] = useState(null);

  useEffect(() => {
    APIKit.get('me/playlists').then(function(response) {
    setPlayLists(response.data.items);
    console.log(response.data.items);
  });
  }, []);
  return (
    <div className="screen-container">
        <div className='library-body'>
            {playlists?.map((playlist) => (
                <div className='playlist-card'>
                    <img src={playlist.images[0].url} className='playlist-image' alt='playlist-Artist'/>
                    <p className='playlist-title'>{playlist.name}</p>
                    <p className='playlist-subtitle'>{playlist.tracks.total} Songs</p>
                </div>
            ))}
        </div>
    </div>
  );
}
