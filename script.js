const messages = [
  "Nhớ nhớ nhớ chị nhiều!!!"
];

function generateRandomNotifications() {
  const notificationCount = 100000;

  for (let i = 0; i < notificationCount; i++) {
    setTimeout(() => {
      const notification = document.createElement('div');
      notification.className = 'notification';

      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      notification.innerHTML = `
        <div class="notification-header">
          <button class="minimize-btn" onclick="minimizeNotification(this)">–</button>
          <span>Tràn ngập bộ</span>
        </div>
        <p>${randomMessage}</p>
      `;

      const x = Math.random() * (window.innerWidth - 240);
      const y = Math.random() * (window.innerHeight - 160);
      notification.style.left = `${x}px`;
      notification.style.top = `${y}px`;

      document.body.appendChild(notification);
    }, i * 200);
  }
}

function minimizeNotification(button) {
  const notification = button.closest('.notification');
  notification.style.display = 'none'; 
}

document.addEventListener("DOMContentLoaded", function () {
  var encodedText = '&#68;&#101;&#115;&#105;&#103;&#110;&#32;&#98;&#121;&#32;&#68;&#105;&#110;&#104;';
  var footer = document.createElement("a");
  footer.innerHTML = encodedText; 
  document.body.appendChild(footer); 
});

const playButton = document.getElementById('play-music');
const audioPlayer = document.getElementById('audioPlayer');

playButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pause Music';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play Music';
    }
});
audioPlayer.addEventListener('ended', () => {
  audioPlayer.play()});