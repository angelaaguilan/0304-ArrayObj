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
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        alt: 'Imagen del departamento',
        nombre: 'Apartamento de lujo en zona exclusiva',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial ',
        ubicacion: ' 123 Luxury Lane, Prestige Suburb, CA 45678 ',
        habitaciones: 4,
        sanitario: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Apartamento acogedor en la montaña',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas ',
        ubicacion: ' 789 Mountain Road, Summit Peaks, CA 23456 ',
        habitaciones: 2,
        sanitario: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Penthouse de lujo con terraza panorámica ',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares ',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789 ',
        habitaciones: ' 3 Habitaciones ',
        sanitario: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Penthouse de lujo con terraza panorámica ',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares ',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789 ',
        habitaciones: 3,
        sanitario: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        alt: 'Imagen del departamento',
        nombre: 'Penthouse de lujo con terraza panorámica ',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares ',
        ubicacion: ' 567 Skyline Avenue, Skyview City, CA 56789 ',
        habitaciones: 3,
        sanitario: 3,
        costo: 4500,
        smoke: false,
        pets: true
    }
];

const propiedadesAlquiler = [
    {
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        alt: 'Imagen del departamento',
        nombre: 'Apartamento en el centro de la ciudad ',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo. ',
        ubicacion: ' 123 Main Street, Anytown, CA 91234 ',
        habitaciones: ' 2 Habitaciones ',
        sanitario: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        alt: 'Imagen del departamento',
        nombre: 'Apartamento luminoso con vista al mar ',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar ',
        ubicacion: ' 456 Ocean Avenue, Seaside Town, CA 56789 ',
        habitaciones: ' 3 Habitaciones',
        sanitario: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        alt: 'Imagen del departamento',
        nombre: 'Condominio moderno en zona residencial ',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial ',
        ubicacion: ' 123 Main Street, Anytown, CA 91234 ',
        habitaciones: ' 2 Habitaciones',
        sanitario: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        alt: 'Imagen del departamento',
        nombre: 'Condominio moderno en zona residencial ',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial ',
        ubicacion: ' 123 Main Street, Anytown, CA 91234 ',
        habitaciones: ' 2 Habitaciones',
        toilet: 2,
        sanitario: 2200,
        smoke: false,
        pets: false
    },
    {
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        alt: 'Imagen del departamento',
        nombre: 'Condominio moderno en zona residencial ',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial ',
        ubicacion: ' 123 Main Street, Anytown, CA 91234 ',
        habitaciones: ' 2 Habitaciones',
        sanitario: 2,
        costo: 2200,
        smoke: false,
        pets: false
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


