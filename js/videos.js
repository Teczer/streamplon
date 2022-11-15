function startVideo(videoId) {
  const lavideo = document.getElementById(videoId);
  lavideo.play();
}

function stopVideo(videoId) {
  const lavideo = document.getElementById(videoId);
  lavideo.pause();
}
