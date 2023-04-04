class Producto{
    constructor(id, nombre, ingredientes, precio){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio;
    }
}

const hamburguesaSimple = new Producto ("hamburguesa01", "Hamburguesa Simple", "Medallon de carne 90gr y Queso Cheddar", 1500);
const hamburguesaGrande = new Producto ("hamburguesa02","Hamburguesa Grande", "Medallon de carne 90gr, Cheddar y Bacon", 2000);
const hamburguesaCompleta = new Producto ("hamburguesa03","Hamburguesa Completa", "Medallon de carne 90gr con Cheddar y Bacon, Lechuga y Tomate", 2500);
const hamburguesaEspecial = new Producto ("hamburguesa04","Hamburguesa Especial", "Medallon de carne 90g con Cheddar y Bacon, Lechuga, Tomate y salsa especial La Fiesta", 3000);
const hamburguesaMaster = new Producto ("hamburguesa05","Hamburguesa Master", "Medallon de carne 90gr, con Cheddar y Bacon, Lechuga y tomate, Pepino, queso Muzzarella y cebolla Crispy", 4000);

const papasSimple = new Producto ("acompaniamiento01", "Papas Simple", "Papas fritas con queso Cheddar", 500);
const papasCompletas = new Producto ("acompaniamiento02", "Papas Completas", "Papas fritas con Cheddar, Bacon y Verdeo", 1000);
const nachos = new Producto ("acompaniamiento03", "Nachos", "Nachos con queso Cheddar", 600);
const ensalada = new Producto ("acompaniamiento04", "Ensalada", "Ensalada con Lechuga, Tomate, Cebolla y condimento", 1000);

const cocaCola = new Producto ("bebida01", "Coca Cola", "", 500);
const cocaZero = new Producto ("bebida02", "Coca Zero", "", 500);
const sprite = new Producto ("bebida03", "Sprite", "", 500);
const spriteZero = new Producto ("bebida04", "Sprite Zero", "", 500);
const agua = new Producto ("bebida05", "Agua", "", 400);
const heineken = new Producto ("bebida06", "Cerveza Heineken", "", 600);
const corona = new Producto ("bebida07", "Cerveza Corona", "", 700);
const naranja = new Producto ("bebida08", "Jugo de Naranja exprimido", "", 1000);
const limonada = new Producto ("bebida09", "Limonada de Menta y Jengibre", "", 1000);

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



hamburguesas.forEach((producto) => {
    console.log(producto.nombre, producto.precio);
})




