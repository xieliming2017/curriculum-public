...
setCurrentAlbum(albumPicasso);

songListContainer.addEventListener('mouseover', function(event) {
    if (event.target.parentElement.className === 'album-view-song-item') {
-            event.target.parentElement.querySelector('.song-item-number').innerHTML = playButtonTemplate;
+            var songItem = getSongItem(event.target);
+
+            if (songItem.getAttribute('data-song-number') !== currentlyPlayingSong) {
+                songItem.innerHTML = playButtonTemplate;
+            }
    }
});

for (i = 0; i < songRows.length; i++) {
...