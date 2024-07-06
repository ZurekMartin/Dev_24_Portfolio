const elements = {
    homeIcon: document.getElementById('home-icon'),
    themeIcon: document.getElementById('theme-icon'),
    arrow: document.getElementById('arrow'),
    mailIcon: document.getElementById('mail-icon'),
    githubIcon: document.getElementById('github-icon')
};

function getThemeToSet() {
    return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme, elements) {
    const mode = `${theme}-mode`;
    document.body.className = mode;
    elements.homeIcon.src = `assets/img/home-${mode}.png`;
    elements.themeIcon.src = `assets/img/${theme === 'dark' ? 'sun' : 'moon'}.png`;
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
    setTheme(getThemeToSet(), elements);

    elements.themeIcon.addEventListener('click', () => {
        const newTheme = document.body.className === 'dark-mode' ? 'light' : 'dark';
        setTheme(newTheme, elements);
    });
});

elements.homeIcon.addEventListener('click', () => window.location.href = 'index.html#hero');
elements.mailIcon.addEventListener('click', () => window.location.href = `mailto:name@adress.com`);

elements.githubIcon.addEventListener('click', (event) => {
    event.preventDefault();
    const win = window.open('https://github.com/ZurekMartin', '_blank');
    win.focus();
    win.opener = null;
});

window.addEventListener('scroll', function () {
    const arrow = document.getElementById('arrow');
    const scrollThreshold = window.innerHeight / 16;

    if (window.scrollY > scrollThreshold) {
        arrow.style.opacity = '0';
    } else {
        arrow.style.opacity = '1';
    }
});
