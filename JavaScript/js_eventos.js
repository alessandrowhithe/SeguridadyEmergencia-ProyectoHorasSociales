// Información de eventos (título, descripción, imagen)
const eventosInfo = {
    "promo": {
        title: "Entrada PROMO",
        description: "La Entrada PROMO es el evento de bienvenida para la nueva generación de estudiantes, donde se refuerzan los lazos comunitarios y se presentan los valores del instituto.",
        img: "https://via.placeholder.com/500x300?text=Entrada+PROMO"
    },
    "don-bosco": {
        title: "Fiesta de Don Bosco",
        description: "La Fiesta de Don Bosco es un evento anual en el que celebramos la vida y obra de nuestro fundador. La comisión se encarga de la seguridad en el evento.",
        img: "https://via.placeholder.com/500x300?text=Fiesta+de+Don+Bosco"
    },
    "viacrucis": {
        title: "Viacrucis",
        description: "En el Viacrucis, la comisión apoya en la organización de rutas de emergencia y el monitoreo de la seguridad durante el evento religioso.",
        img: "https://via.placeholder.com/500x300?text=Viacrucis"
    },
    "maria-auxiliadora": {
        title: "Día de María Auxiliadora",
        description: "El Día de María Auxiliadora es una celebración religiosa donde se organiza un operativo especial de seguridad y prevención de incidentes.",
        img: "https://via.placeholder.com/500x300?text=Día+de+María+Auxiliadora"
    },
    "expo-tecnica": {
        title: "Expo Técnica",
        description: "La Expo Técnica es una muestra de las habilidades de los estudiantes, donde la comisión ayuda en la supervisión y la seguridad del evento.",
        img: "https://via.placeholder.com/500x300?text=Expo+Técnica"
    },
    "intramuros": {
        title: "Intramuros",
        description: "En los eventos deportivos intramuros, la comisión colabora en la organización y supervisión de las zonas deportivas para garantizar la seguridad.",
        img: "https://via.placeholder.com/500x300?text=Intramuros"
    }
};

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');

// Función para abrir el modal
function openModal(evento) {
    const info = eventosInfo[evento];
    modalImg.src = info.img;
    modalTitle.textContent = info.title;
    modalDescription.textContent = info.description;
    modal.style.display = 'flex';
}

// Cerrar el modal
closeModal.onclick = function() {
    modal.style.display = 'none';
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

// Añadir evento click a cada tarjeta
document.querySelectorAll('.evento').forEach(item => {
    item.addEventListener('click', function() {
        const evento = this.getAttribute('data-evento');
        openModal(evento);
    });
});
