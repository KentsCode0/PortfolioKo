import { renderWorks } from './works.js';

export const loadContent = (page, sectionId) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `../html/${page}`, true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const contentElement = document.getElementById('content');
            contentElement.innerHTML = xhr.responseText;

            if (sectionId === 'works') {
                renderWorks();
            }

            if (sectionId === 'resume') {
                const exportButton = document.getElementById('exportButton');
                if (exportButton) {
                    exportButton.addEventListener('click', () => {
                        import('./export.js').then(module => {
                            module.exportResumeToPDF();
                        });
                    });
                }
            }
        }
    };
    xhr.send();
};

window.loadContent = loadContent;

document.addEventListener('DOMContentLoaded', () => {
    loadContent('about.html', 'about');
});