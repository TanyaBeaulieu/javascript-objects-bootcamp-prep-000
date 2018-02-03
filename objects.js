var playlist = {Beatles : 'Let it Be'};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}