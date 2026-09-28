document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {
        const savedTheme = localStorage.getItem('portfolio-theme');
        
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-theme');
            themeToggleBtn.textContent = '☀️ Light Mode';
        } else {
            themeToggleBtn.textContent = '🌙 Dark Mode';
        }

        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            
            if (document.body.classList.contains('dark-theme')) {
                localStorage.setItem('portfolio-theme', 'dark');
                themeToggleBtn.textContent = '☀️ Light Mode';
            } else {
                localStorage.setItem('portfolio-theme', 'light');
                themeToggleBtn.textContent = '🌙 Dark Mode';
            }
        });
    }

    const timerDisplay = document.getElementById('timer-display');
    let secondsSpent = 0;

    if (timerDisplay) {
        setInterval(() => {
            secondsSpent++;
            
            if (secondsSpent < 60) {
                timerDisplay.textContent = `Time on page: ${secondsSpent} second${secondsSpent === 1 ? '' : 's'}`;
            } else {
                const minutes = Math.floor(secondsSpent / 60);
                const remainingSeconds = secondsSpent % 60;
                timerDisplay.textContent = `Time on page: ${minutes}m ${remainingSeconds}s`;
            }
        }, 1000);
    }
});
