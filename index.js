class Producto{
    constructor(id, nombre, ingredientes, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const hamburguesaSimple = new Producto ("hamburguesa01", "Hamburguesa Simple", "Medallon de carne 90gr y Queso Cheddar", 1500, "./Image/Hamburguesa-Simple.jpg");
const hamburguesaGrande = new Producto ("hamburguesa02","Hamburguesa Grande", "Medallon de carne 90gr, Cheddar y Bacon", 2000, "./Image/Hamburguesa-CheddarYBacon.jpg");
const hamburguesaCompleta = new Producto ("hamburguesa03","Hamburguesa Completa", "Medallon de carne 90gr con Cheddar y Bacon, Lechuga y Tomate", 2500, "./Image/Hamburguesa-QuesoLechugaYTomate.jpg");
const hamburguesaEspecial = new Producto ("hamburguesa04","Hamburguesa Especial", "Medallon de carne 90g con Cheddar y Bacon, Lechuga, Tomate y salsa especial La Fiesta", 3000, "./Image/Hamburguesa-Especial.jpg");
const hamburguesaMaster = new Producto ("hamburguesa05","Hamburguesa Master", "Medallon de carne 90gr, con Cheddar y Bacon, Lechuga y tomate, Pepino, queso Muzzarella y cebolla Crispy", 4000, "./Image/Hamburguesa-Master.jpg");

const papasSimple = new Producto ("acompaniamiento01", "Papas Simple", "Papas fritas con queso Cheddar", 500, "./Image/Papas-ConCheddar.jpg");
const papasCompletas = new Producto ("acompaniamiento02", "Papas Completas", "Papas fritas con Cheddar, Bacon y Verdeo", 1000, "./Image/Papas-CheddarBaconYVerdeo.jpg");
const nachos = new Producto ("acompaniamiento03", "Nachos", "Nachos con queso Cheddar", 600, "./Image/Nachos-ConCheddar.jpg");
const ensalada = new Producto ("acompaniamiento04", "Ensalada", "Ensalada con Lechuga, Tomate, Cebolla y condimento", 1000, "./Image/Ensalada.jpg");

const cocaCola = new Producto ("bebida01", "Coca Cola", "", 500, "./Image/Coca.jpg");
const cocaZero = new Producto ("bebida02", "Coca Zero", "", 500, "./Image/CocaZero.jpg");
const sprite = new Producto ("bebida03", "Sprite", "", 500, "./Image/Sprite.jpg");
const spriteZero = new Producto ("bebida04", "Sprite Zero", "", 500, "./Image/Sprite.jpg");
const agua = new Producto ("bebida05", "Agua", "", 400, "./Image/Agua.jpg");
const heineken = new Producto ("bebida06", "Cerveza Heineken", "", 600, "./Image/CervezaHeineken.jpg");
const corona = new Producto ("bebida07", "Cerveza Corona", "", 700, "./Image/CervezaCorona.jpg");
const naranja = new Producto ("bebida08", "Jugo de Naranja exprimido", "", 1000, "./Image/NaranjaExprimido.jpg");
const limonada = new Producto ("bebida09", "Limonada de Menta y Jengibre", "", 1000, "./Image/LimonadaMentaYJengibre.webp");

/** HAMBURGUESAS */
const hamburguesas = [];
hamburguesas.push(hamburguesaSimple, hamburguesaGrande, hamburguesaCompleta, hamburguesaEspecial, hamburguesaMaster);

/** ACOMPAÑAMIENTO */
const acompaniamientos = [];
acompaniamientos.push(papasSimple, papasCompletas, nachos, ensalada);

/** BEBIDAS */
const bebidas = [];
bebidas.push(cocaCola, cocaZero, sprite, spriteZero, agua, heineken, corona, naranja, limonada);

/** TODOS LOS PRODCUTOS */
const todosLosProductos = hamburguesas.concat(acompaniamientos, bebidas);



const cuerpo = document.querySelector("#cuerpo");
const cuerpo1 = document.querySelector("#cuerpo1");
const cuerpo2 = document.querySelector("#cuerpo2");
const cuerpo__boton = document.querySelectorAll(".cuerpo__boton");
const cuerpo__hamburguesas = document.querySelector("#cuerpo__hamburguesas");
const cuerpo__acompaniamiento = document.querySelector("#cuerpo__acompaniamiento");
const cuerpo__bebidas = document.querySelector("#cuerpo__bebidas");
const cuerpo__todo = document.querySelector("#cuerpo__todo");

function seleccionDeHamburguesas(){
    hamburguesas.forEach(producto => {
        
        cuerpo1.remove();
        const div = document.createElement("div");
        div.classList.add("cuerpo2");
        div.innerHTML = `<img class="producto-imagen" src= "${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>`;

            cuerpo.append(div);
    })
}

seleccionDeHamburguesas();
/**todosLosProductos.forEach((producto) => {
    console.log(producto.nombre, producto.precio);
})
**/