// 获取当前语言
function getCurrentLanguage() {
    return localStorage.getItem('language') || 'zh';
}

// 设置语言
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updateContent();
}

// 切换语言
function toggleLanguage() {
    const currentLang = getCurrentLanguage();
    const newLang = currentLang === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
}

// 更新页面内容
function updateContent() {
    const currentLang = getCurrentLanguage();
    
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });

    // 更新页面语言属性
    document.documentElement.lang = currentLang;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
}); 