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


const propiedadesVentas = [
    {
        src: './assets/img/nueva-york-09212018-366965.jpg',
        alt: 'Imagen del departamento',
        nombre: 'Apartamento de lujo en zona exclusiva',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial ',
        ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678 ',
        habitaciones: 4,
        sanitario: 4,
        costo: 15000,
        smoke: false,
        pets: false
    },
    {
        src: "./assets/img/furgoneta.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Apartamento acogedor en la montaña',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas ',
        ubicacion: ' 789 Mountain Road, Summit Peaks, CA 23456 ',
        habitaciones: 2,
        sanitario: 1,
        costo: 5000,
        smoke: true,
        pets: true
    },
    {
        src: "./assets/img/penthouse.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Penthouse de lujo con terraza panorámica ',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares ',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789 ',
        habitaciones: 3,
        sanitario: 3,
        costo: 95000,
        smoke: false,
        pets: true
    },
    {
        src: "./assets/img/casa-colonial12.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Lujosa casa de campo con gran espacio ',
        descripcion: 'Casa de campo con un gran espacio, solo para uso comercial ',
        ubicacion: ' 567 Fifth Avenue, 222 Rd, CA 56789 ',
        habitaciones: 10,
        sanitario: 8,
        costo: 200000,
        smoke: true,
        pets: true
    },
    {
        src: "./assets/img/Casas-Canada.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Departamento con estacionamiento',
        descripcion: 'Este departamento ofrece una gran terraza y estacionamiento en subterraneo',
        ubicacion: ' 457 Michigan Avenue, City Park, US 41385 ',
        habitaciones: 3,
        sanitario: 3,
        costo: 11700,
        smoke: false,
        pets: true
    }
];

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

const botones = [
      {
        href:"./propiedades_venta.html",
        titulo: 'Ver todas las propiedades en venta',
        seccion: 'ventas'
    },
    {
        href:"./propiedades_alquiler.html",
        titulo: 'Ver todas las propiedades en alquiler',
        seccion: 'alquiler'
    }
]

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


// PROPIEDADES EN VENTA
const cardsVenta = document.querySelector('.rowVenta')
let templateVenta = ''
let counter = 0
for (const propVenta of propiedadesVentas) {
  if (counter < 3) {
    templateVenta += `<div class="col-md-4 mb-4">
            <div class="card">
              <img
                src="${propVenta.src}"
                class="card-img-top"
                alt="${propVenta.alt}"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propVenta.nombre}
                </h5>
                <p class="card-text">
                  ${propVenta.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>${propVenta.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propVenta.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propVenta.sanitario} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propVenta.costo}</p>`;
 
                if (propVenta.smoke) {
                    templateVenta += `<p class="text-success">
                              <i class="fas fa-smoking"></i> Permitido fumar
                            </p>`
                } else {
                    templateVenta += `<p class="text-danger">
                              <i class="fas fa-smoking-ban"></i> No se permite fumar
                            </p>`
                }

                if (propVenta.pets) {
                    templateVenta += `<p class="text-success">
                              <i class="fas fa-paw"></i> Mascotas permitidas
                            </p>
                          </div>
                        </div>
                      </div>`
                } else {
                    templateVenta += `<p class="text-danger">
                              <i class="fa-solid fa-ban"></i> No se permiten mascotas
                            </p>
                          </div>
                        </div>
                      </div>`
                }   
              counter++;
  }
}
cardsVenta.innerHTML= templateVenta;


// PROPIEDADES EN ALQUILER
const cardsAlq = document.querySelector('.rowAlq')
let templateAlq = ''
let countAlq = 0
for (const propAlq of propiedadesAlquiler) {
  if (countAlq < 3) {
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
      countAlq++
  }
}
console.log(templateAlq)
cardsAlq.innerHTML= templateAlq;

const botonV = document.querySelector('.botonV')
const botonA = document.querySelector('.botonA')
let tempBtnV = ''
let tempBtnA = ''

for (const btn of botones) {
  if (btn.seccion === 'ventas') {
    tempBtnV = `<a href="${btn.href}" class="btn btn-dark">
          ${btn.titulo}</a>`
  } else {
    tempBtnA = `<a href="${btn.href}" class="btn btn-dark">
          ${btn.titulo}</a>`
  }
}
botonV.innerHTML= tempBtnV; 
botonA.innerHTML= tempBtnA;


