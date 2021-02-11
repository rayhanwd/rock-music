const searchSong = () =>{
const searchText = document.getElementById('search-field').value;
    const url = `https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
    .then(response => response.json())
    .then(data => displaySong(data.data))
}

const displaySong = (songs) =>{
const songContainer = document.getElementById('songcontainer');
      songContainer.innerHTML = '';
    songs.forEach(song =>{
        const songDiv = document.createElement('div');
        songDiv.className = 'single-result row align-items-center my-3 p-3';
        songDiv.innerHTML = `
        <songDiv class="col-md-9">
        <h3 class="lyrics-name">${song.title}</h3>
        <p class="author lead">Album by <span>${song.artist.name}</span></p>

        <audio controls>
        <source src="${song.preview}" type="audio/mp3">
        Your browser does not support the audio tag.
        </audio>

    </songDiv>
    <songDiv class="col-md-3 text-md-right text-center">
        <button onclick="getlyric('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
    </songDiv>
        `;
        songContainer.appendChild(songDiv);
    })

}

const getlyric = (artist,title) =>{
    const url = ` https://api.lyrics.ovh/v1/${artist}/${title}`
    fetch(url)
    .then(response => response.json())
    .then(data => displayLyrics(data.lyrics))
}

const displayLyrics = lyrics =>{
    const lyricsDiv = document.getElementById('lyrics-container');
    lyricsDiv.innerText = lyrics;
}