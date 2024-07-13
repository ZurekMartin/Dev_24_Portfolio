const elements = {
    homeIcon: document.getElementById('home-icon'),
    themeIcon: document.getElementById('theme-icon'),
    arrow: document.getElementById('arrow'),
    mailIcon: document.getElementById('mail-icon'),
    githubIcon: document.getElementById('github-icon'),
    filterButtons: document.querySelectorAll('.filter-button'),
    projects: document.querySelectorAll('.project')
};

elements.homeIcon.addEventListener('click', () => window.location.href = 'index.html#hero');
elements.mailIcon.addEventListener('click', () => window.location.href = `mailto:name@adress.com`);
elements.githubIcon.addEventListener('click', () => window.location.href = 'https://github.com/ZurekMartin');

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', currentTheme);
    applyTheme();
}

function applyTheme() {
    const theme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const mode = `${theme}_mode`;
    document.body.className = mode;
    elements.homeIcon.src = `assets/img/home_${mode}.png`;
    elements.themeIcon.src = `assets/img/${theme === 'dark' ? 'sun' : 'moon'}.png`;
}

document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
    elements.themeIcon.addEventListener('click', toggleTheme);
});


window.addEventListener('scroll', function () {
    const scrollThreshold = window.innerHeight / 16;

    if (window.scrollY > scrollThreshold) {
        elements.arrow.classList.remove('opacity-down');
        elements.arrow.classList.add('opacity-up');
    } else {
        elements.arrow.classList.remove('opacity-up');
        elements.arrow.classList.add('opacity-down');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const projectImages = document.querySelectorAll('.projects-grid .project img[data-url]');

    projectImages.forEach(img => {
        img.addEventListener('click', function() {
            window.location.href = img.getAttribute('data-url');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    elements.filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            elements.projects.forEach(project => {
                if (filter === 'view-all' || project.classList.contains(filter)) {
                    project.classList.remove('hidden');
                    project.classList.add('showed');
                } else {
                    project.classList.remove('showed');
                    project.classList.add('hidden');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const filter = new URLSearchParams(window.location.search).get('filter');
    if (filter) {
        elements.projects.forEach(project => {
            project.classList.toggle('hidden', !project.classList.contains(filter));
            project.classList.toggle('showed', project.classList.contains(filter));
        });
    }
});

document.querySelectorAll('.project a').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.project').querySelector('.project-description').classList.remove('hidden');
        document.querySelector('.overlay').style.display = 'block';
    });
});

document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelectorAll('.project-description').forEach(description => {
        description.classList.add('hidden');
    });
    this.style.display = 'none';
});
