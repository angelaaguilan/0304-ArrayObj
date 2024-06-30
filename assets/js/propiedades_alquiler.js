const srcLinks = [
    {
        href:"./index.html",
        titulo: 'Inmobiliaria ADL',
        seccion: 'index'
    },    
    {
        href:"./propiedades_venta.html",
        titulo: 'En venta',
        seccion: 'ventas'
    },
    {
        href:"./propiedades_alquiler.html",
        titulo: 'Alquiler',
        seccion: 'alquiler'
    }
]

const propiedadesAlquiler = [
    {
        src: "./assets/img/apartamento.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Apartamento en el centro de la ciudad ',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo. ',
        ubicacion: ' 123 Main Street, Anytown, CA 91234 ',
        habitaciones: 2,
        sanitario: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        src: "./assets/img/vistamar.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Apartamento luminoso con vista al mar ',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar ',
        ubicacion: ' 456 Ocean Avenue, Seaside Town, CA 56789 ',
        habitaciones: 3,
        sanitario: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        src: "./assets/img/condominio.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Condominio seguro, solo acceso privado',
        descripcion: 'Este elegante condominio ubicado cerca de la plaza',
        ubicacion: ' 123 Main Street, Anytown, CA 91234 ',
        habitaciones: 2,
        sanitario: 2,
        costo: 2400,
        smoke: false,
        pets: false
    },
    {
        src: "./assets/img/CasaModerna.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Condominio moderno en zona residencial ',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial ',
        ubicacion: ' 823 Blue Street, Anytown, CA 91633',
        habitaciones: 5,
        sanitario: 2,
        costo: 8500,
        smoke: true,
        pets: true
    },
    {
        src: "./assets/img/casa-con-piscina.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Moderna y amplia casa en cordillera',
        descripcion: 'Elegante casa ubicada en una tranquila y segura zona rural',
        ubicacion: ' 541 Main Tree, Trupper, AU 965374',
        habitaciones: 4,
        sanitario: 2,
        costo: 9000,
        smoke: true,
        pets: true
    }
];

// MENÚ SUPERIOR
const linksInd = document.querySelector('.nav-index');
let templateInd = '';
for (const srcLink of srcLinks) {
  if (srcLink.seccion ==='index') {
    templateInd += `<a class="navbar-brand" href="${srcLink.href}">${srcLink.titulo}</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">`
  } else {
    templateInd += `<li class="nav-item">
                <a class="nav-link" href="${srcLink.href}">${srcLink.titulo}</a></li>`;
  }
}
templateInd += '</ul></div>';
linksInd.innerHTML= templateInd;


// PROPIEDADES EN ALQUILER
const cardsAlq = document.querySelector('.rowAlq')
let templateAlq = ''
for (const propAlq of propiedadesAlquiler) {
    templateAlq += `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propAlq.src}"
                class="card-img-top"
                alt="${propAlq.alt}"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propAlq.nombre}
                </h5>
                <p class="card-text">
                  ${propAlq.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propAlq.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propAlq.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propAlq.sanitario} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propAlq.costo}</p>`
                if (propAlq.smoke) {
                  templateAlq += `<p class="text-success">
                    <i class="fas fa-smoking"></i> Permitido fumar
                  </p>`
                } else {
                  templateAlq += `<p class="text-danger">
                  <i class="fas fa-smoking-ban"></i> No se permite fumar
                </p>`
                }
                if (propAlq.pets) {
                  templateAlq += `<p class="text-success">
                  <i class="fas fa-paw"></i> Mascotas permitidas
                </p>
                  </div>
                </div>
              </div>`
                } else {
                  templateAlq += `<p class="text-danger">
                    <i class="fas fa-ban"></i> No se permiten mascotas
                  </p>
              </div>
            </div>
          </div>`
  }
}
console.log(templateAlq)
cardsAlq.innerHTML= templateAlq;
