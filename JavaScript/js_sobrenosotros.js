// Información de eventos (título, descripción, imagen)
const JerarquíaInfo = {
    "coordinador": {
        title: "Coordinador",
        description: "Lidera las actividades del comité y toma decisiones importantes.",
        img: "https://media.istockphoto.com/id/1357629646/es/vector/organizador-organizador.jpg?s=612x612&w=0&k=20&c=w0TWyrTSKdclG2ddgunvoHVJFiXhHcmbPL_h8Co0N6o="
    },
    "subcoordinadores": {
        title: "SubCoordinadores",
        description: "Asisten al coordinador en sus tareas y lo sustituyen cuando es necesario.",
        img: "https://static.vecteezy.com/system/resources/previews/011/231/503/non_2x/coordinating-or-coordinator-icon-with-people-vector.jpg"
    },
    "Jefes-Brigada": {
        title: "Jefes de Brigada",
        description: "Se encargan de organizar las brigadas de primeros auxilios, evacuación y extinción de incendios.",
        img: "https://banner2.cleanpng.com/20180612/gzq/kisspng-computer-icons-symbol-5b205d151c0a56.2177396315288476371149.jpg"
    },
    "Nucleo": {
        title: "Nucleo",
        description: "Miembros clave del comité que participan en la toma de decisiones y en la planificación de actividades.",
        img: "https://cdn-icons-png.flaticon.com/512/1820/1820926.png"
    },
    "Asesor de la Comisión ": {
        title: "Asesor",
        description: "El asesor brinda orientación técnica y apoyo estratégico a la comisión en temas de seguridad y emergencias. Su rol es asegurar que todas las acciones del comité estén alineadas con las normativas vigentes y las mejores prácticas en gestión de emergencias.",
        img: "https://cdn-icons-png.flaticon.com/512/13440/13440322.png"
    },
};

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');

// Función para abrir el modal
function openModal(Jerar) {
    const info = JerarquíaInfo[Jerar];
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
    if (Jerar.target == modal) {
        modal.style.display = 'none';
    }
};

// Añadir evento click a cada tarjeta
document.querySelectorAll('.Jerar').forEach(item => {
    item.addEventListener('click', function() {
        const Jerar = this.getAttribute('data-Jerar');
        openModal(Jerar);
    });
});
