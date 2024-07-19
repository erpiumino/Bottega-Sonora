document.addEventListener('DOMContentLoaded', () => {
    const anchorElement = document.getElementById('popup-anchor');

    if (anchorElement) {
        fetch('anchors/modal.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                const modalContainer = document.createElement('div');
                modalContainer.innerHTML = data;
                anchorElement.appendChild(modalContainer);

                // Log per debug
                console.log('Popup loaded and added to the DOM.');

                // Aggiungi la classe 'visible' al pop-up
                const modal = document.getElementById('modalTour');
                if (modal) {
                    modal.classList.add('visible');
                    console.log('Class "visible" added to modal.');
                } else {
                    console.error('Modal element with ID "modalTour" not found.');
                }
            })
            .catch(error => {
                console.error('Error loading popup:', error);
            });
    } else {
        console.error('Anchor element with ID "popup-anchor" not found.');
    }
});


/////////////////////////////////////////////////Anchors per header///////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    const headerAnchor = document.getElementById('header-anchor');
    const footerAnchor = document.getElementById('footer-anchor');

    const loadHTML = (url, container) => {
        console.log(`Loading HTML from: ${url}`); // Debug log
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                container.innerHTML = data;
                console.log(`${url} loaded successfully.`);
                updateNavigation(); // Assicurati che questa funzione funzioni come previsto
            })
            .catch(error => {
                console.error('Error loading HTML:', error);
            });
    };

    if (headerAnchor) {
        loadHTML('Anchors/header.html', headerAnchor);
    } else {
        console.error('Header anchor element not found.');
    }

    if (footerAnchor) {
        loadHTML('Anchors/footer.html', footerAnchor);
    } else {
        console.error('Footer anchor element not found.');
    }
});



function updateNavigation() {
    const currentPath = window.location.pathname;

    document.querySelectorAll('#navmenu .nav-link').forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    document.querySelectorAll('#sidebar-menu .nav-link').forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath === linkPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
