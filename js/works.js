const works = {
    ecommerce: {
        name: 'E-commerce Project',
        images: [
            'ecommerce/ecommerce1.png',
            'ecommerce/ecommerce2.png',
            'ecommerce/ecommerce3.png',
            'ecommerce/ecommerce4.png',
            'ecommerce/ecommerce5.png'
        ]
    },
    anuwrap: {
        name: 'Anuwrap Project',
        images: [
            'anuwrap/anu1.png',
            'anuwrap/anu2.png',
            'anuwrap/anu3.png',
            'anuwrap/anu4.png',
            'anuwrap/anu5.png',
            'anuwrap/anu6.png',
            'anuwrap/anu7.png',
        ]
    },
    work3: {
        name: 'Hola Project',
        images: [
            'hola/hola1.png',
            'hola/hola2.png',
            'hola/hola3.png',
        ]
    },
    work4: {
        name: 'Brewhalla Project',
        images: [
            'brew/brew1.png',
            'brew/brew2.png',
            'brew/brew3.png',
            'brew/brew4.png',
            'brew/brew5.png',
        ]
    }
};


export const renderWorks = () => {
    const worksWrapper = document.querySelector('.pictures-wrapper');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');
    const close = document.querySelector('.close');

    if (!worksWrapper) {
        console.error('No element with class "pictures-wrapper" found.');
        return;
    }

    Object.keys(works).forEach(workKey => {
        const work = works[workKey];

        // Create the container for each project
        const workDiv = document.createElement('div');
        workDiv.classList.add('work-item');

        // Create and append the project name
        const workTitle = document.createElement('h3');
        workTitle.textContent = work.name;
        workDiv.appendChild(workTitle);

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('work-item-content');

        // Loop through images and add them to the content div
        work.images.forEach(picture => {
            const img = document.createElement('img');
            img.src = `../assets/img/${picture}`;
            img.alt = picture;
            img.onerror = () => console.error(`Failed to load: ${img.src}`);

            // Click event to open modal
            img.onclick = () => {
                modal.style.display = 'block';
                modalImg.src = img.src;
                captionText.innerHTML = img.alt;
            };

            contentDiv.appendChild(img);
        });

        workDiv.appendChild(contentDiv);
        worksWrapper.appendChild(workDiv);
    });

    // Click event to close the modal
    close.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}
