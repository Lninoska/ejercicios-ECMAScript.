function saludo() {
    var felino = "gato"
    if(felino === "gato"){
        var mascota = "domestico"
    }
    console.log(mascota)
}

saludo()

if("perro".length > 3) {
    let mascota = "amigable"
}
console.log(mascota)
{
    const mascota = conejo
}
console.log(mascota)

function temperatura(clima, sensaciontermica) {
    return ` El dia ${clima} tiene una ${sensaciontermica} temperatura`
}
console.log(temperatura('lluvioso', 'fria'))

const temperaturaFlecha = (clima, sensaciontermica) => ` El dia ${clima} tiene una ${sensaciontermica} temperatura`
console.log(temperaturaFlecha('caluroso', 'calida')) 


const libro = {
    nombre: 'La marca de Atenea',
    autor: 'Rick Riordan', 
    genero: 'mitologia'
}

function describirlibro(nombre, autor, genero){
    return `El libro ${nombre} es del autor ${autor} y su genero es ${genero}`
}
console.log(describirlibro(libro.nombre, libro.autor, libro.genero))


const album = {
    nombre: 'Midnights',
    artista: 'Taylor Swift',
    año: 2022,
    genero: 'pop'
}

const actualizaralbum = {
    ...album,
    productor:'Jack Antonoff',
    duracion:'44:10'
}
console.log(actualizaralbum)

const pelicula = {
    nombre:'Spiderman: No Way Home',
    director:'Jon Watts', 
    anio:2021,
    genero:'Acción, Aventura, Ciencia Ficción',
}

const valores = Object.values(pelicula)
for(const valor of valores){
    console.log(valor)
}
