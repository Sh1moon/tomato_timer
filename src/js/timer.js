import '../scss/index.scss'; 

  document.addEventListener('DOMContentLoaded', function() {
    const timerText = document.querySelector('.window__timer-text');
    const startBtn = document.querySelector('.button-primary');
    const stopBtn = document.querySelector('.button-secondary');
    
    let time = 1500; // 25 минут в секундах
    let timerId = null;
    
    // Обновление отображения таймера
    function updateTimer() {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      timerText.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
    
    // Старт таймера
    startBtn.addEventListener('click', function() {
      if (!timerId) {
        timerId = setInterval(function() {
          time--;
          updateTimer();
          
          if (time < 0) {
            clearInterval(timerId);
            timerId = null;
            alert('Время вышло!');
            time = 1500; // Сброс на 25 минут
            updateTimer();
            startBtn.classList.remove('hidden');
            stopBtn.classList.add('hidden');
          }
        }, 1000);
        
        startBtn.classList.add('hidden');
        stopBtn.classList.remove('hidden');
      }
    });
    
    // Стоп таймера
    stopBtn.addEventListener('click', function() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
        time = 1500; // Сброс на 25 минут
        updateTimer();
        startBtn.classList.remove('hidden');
        stopBtn.classList.add('hidden');
      }
    });
    
    // Инициализация
    updateTimer();
  });
