// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const li = document.getElementsById("lista-de-productos")
//Se modifico Name por Id
const $i = document.querySelector('.input');

const displayProductos = (e) => {
  //se creo una fucnción flecha con la cual vamos a traer los elementos para llenar la lista, asimismo se cambia var por const, pues si no se estaria sobreescriciebdo
for (let i = 0; i < productos.length; i++) {
  const d = document.createElement("div")
  d.classList.add("producto")

  const ti = document.createElement("p")
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  const imagen = document.createElement("img");
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  li.appendChild(d)
}
}

displayProductos(productos);
const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {

  const texto = $i.value.toLowerCase();
  console.log(texto);
  //La parte del while estaba eliminando, los elemntos, tambien como todas las fotos jpg se encuentran en minúsculas, pasamos el String a minúsculas
  /*while (li.firstChild) {
    li.removeChild(li.firstChild); */
  }

  const productosFiltrados = filtrado(productos, texto);
  displayProductos(productosFiltrados);

  for (let i = 0; i < productosFiltrados.length; i++) {
    const d = document.createElement("div")
    d.classList.add("producto")
  
    const ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    const imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }


const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  