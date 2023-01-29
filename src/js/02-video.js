import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));
function onPlay(event) {
  localStorage.setItem('videoplayer-current-time', event.seconds);
}
player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
const time = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(time)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
