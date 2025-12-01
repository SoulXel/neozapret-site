// NeoZapret Website JavaScript
// Интерактивность и функциональность

document.addEventListener('DOMContentLoaded', function() {
    // Status Badge Animation
    const statusBadge = document.getElementById('status-badge');
    if (statusBadge) {
        // Симуляция изменения статуса (для демонстрации)
        const statuses = [
            { text: 'Готов к работе', color: 'var(--success)' },
            { text: 'Обход активен', color: 'var(--info)' },
            { text: 'Проверка...', color: 'var(--warning)' }
        ];
        
        let currentStatus = 0;
        // Раскомментируйте для автоматической смены статуса:
        // setInterval(() => {
        //     currentStatus = (currentStatus + 1) % statuses.length;
        //     const status = statuses[currentStatus];
        //     statusBadge.querySelector('.status-text').textContent = status.text;
        //     statusBadge.querySelector('.status-text').style.color = status.color;
        // }, 3000);
    }
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 60; // Учитываем title bar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Enhanced Card Hover Effects
    const cards = document.querySelectorAll('.feature-card, .strategy-card, .download-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        // Add ripple effect on click
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.1)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s ease-out';
            ripple.style.left = e.offsetX + 'px';
            ripple.style.top = e.offsetY + 'px';
            ripple.style.width = ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            this.style.position = 'relative';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        .animate-in {
            animation: fadeInUp 0.6s ease-out forwards;
        }
    `;
    document.head.appendChild(style);
    
    // Download Buttons - Placeholder functionality
    const downloadBtns = document.querySelectorAll('.download-btn');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // В реальном сайте здесь был бы переход на страницу загрузки
            alert('В реальном сайте здесь будет ссылка на скачивание приложения.\n\nДля демонстрации: это кнопка загрузки.');
        });
    });
    
    // Enhanced Intersection Observer for Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards and sections for animation
    const animatedElements = document.querySelectorAll('.feature-card, .strategy-card, .download-card, .requirement-item, .section-title');
    animatedElements.forEach((el, index) => {
        observer.observe(el);
    });
    
    // Parallax effect removed - hero section stays fixed
    
    // Copy to Clipboard for Code Blocks (если будут)
    document.querySelectorAll('code').forEach(code => {
        code.addEventListener('click', function() {
            const text = this.textContent;
            if (navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    const originalText = this.textContent;
                    this.textContent = 'Скопировано!';
                    setTimeout(() => {
                        this.textContent = originalText;
                    }, 1000);
                });
            }
        });
    });
    
    // Console Easter Egg
    console.log('%c🔓 NeoZapret', 'font-size: 20px; font-weight: bold; color: #4A6A8A;');
    console.log('%cОбход блокировок РФ 2025', 'font-size: 12px; color: #9E9E9E;');
    console.log('%cВерсия: 3.2.1', 'font-size: 10px; color: #7A7A7A;');
    console.log('%cGitHub: https://github.com/SoulXel/NeoZapret', 'font-size: 10px; color: #4A6A8A;');
    
    // Keyboard Shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K для поиска (можно добавить поиск)
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            console.log('Search shortcut pressed');
        }
        
        // Escape для закрытия модальных окон (если будут)
        if (e.key === 'Escape') {
            // Закрыть модальные окна
        }
    });
    
    // Theme Toggle (опционально, если захотите добавить светлую тему)
    // Можно добавить переключатель темы в будущем
    
    // Performance: Lazy Load Images (если будут добавлены изображения)
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});

// Utility Functions
function updateStatus(text, color) {
    const statusBadge = document.getElementById('status-badge');
    if (statusBadge) {
        const statusText = statusBadge.querySelector('.status-text');
        if (statusText) {
            statusText.textContent = text;
            statusText.style.color = color;
        }
    }
}

// Export for potential use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateStatus };
}

