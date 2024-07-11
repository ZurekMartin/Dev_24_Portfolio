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
    const mode = `${theme}_mode`;
    document.body.className = mode;
    elements.homeIcon.src = `assets/img/home_${mode}.png`;
    elements.themeIcon.src = `assets/img/${theme === 'dark' ? 'sun' : 'moon'}.png`;
    localStorage.setItem('theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
    setTheme(getThemeToSet(), elements);

    elements.themeIcon.addEventListener('click', () => {
        const newTheme = document.body.className === 'dark_mode' ? 'light' : 'dark';
        setTheme(newTheme, elements);
    });
});

elements.homeIcon.addEventListener('click', () => window.location.href = 'index.html#hero');
elements.mailIcon.addEventListener('click', () => window.location.href = `mailto:name@adress.com`);
elements.githubIcon.addEventListener('click', () => window.location.href = 'https://github.com/ZurekMartin');

window.addEventListener('scroll', function () {
    const arrow = document.getElementById('arrow');
    const scrollThreshold = window.innerHeight / 16;

    if (window.scrollY > scrollThreshold) {
        arrow.classList.remove('opacity-down');
        arrow.classList.add('opacity-up');
    } else {
        arrow.classList.remove('opacity-up');
        arrow.classList.add('opacity-down');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const projects = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            if (filter === 'view-all') {
                projects.forEach(project => {
                    project.style.display = '';
                });
            } else {
                projects.forEach(project => {
                    if (project.classList.contains(filter)) {
                        project.style.display = '';
                    } else {
                        project.style.display = 'none';
                    }
                });
            }
        });
    });
});
