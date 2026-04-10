document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const submitBtn = document.getElementById('submit-btn');
    
    const loginView = document.getElementById('login-view');
    const cvView = document.getElementById('cv-view');
    const logoutBtn = document.getElementById('logout-btn');
    
    const togglePasswordBtn = document.getElementById('toggle-password');
    const currentYearSpan = document.getElementById('current-year');

    // Bonus: Footer current year
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Bonus: Password Show/Hide Toggle
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        const icon = togglePasswordBtn.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
    });

    // Обработка входа
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const user = usernameInput.value.trim();
        const pass = passwordInput.value.trim();

        // Bonus: Loading/Disabled State
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loading...';
        submitBtn.disabled = true;
        errorMessage.classList.add('hidden');

        // Имитация задержки сети для отображения анимации загрузки
        setTimeout(() => {
            if (user === 'test' && pass === 'test') {
                // Успешный вход
                loginView.classList.remove('active');
                loginView.classList.add('hidden');
                cvView.classList.remove('hidden');
                cvView.classList.add('active');
                loginForm.reset();
            } else {
                // Bonus: Animation on failed login (Shake)
                errorMessage.classList.remove('hidden');
                const loginCard = document.querySelector('.login-card');
                loginCard.classList.add('shake');
                
                // Удаляем класс после завершения анимации
                setTimeout(() => {
                    loginCard.classList.remove('shake');
                }, 400);
            }
            
            // Сброс кнопки
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }, 600); // 600ms задержка
    });

    // Функция обработки выхода
    logoutBtn.addEventListener('click', () => {
        cvView.classList.remove('active');
        cvView.classList.add('hidden');
        loginView.classList.remove('hidden');
        loginView.classList.add('active');
    });
});