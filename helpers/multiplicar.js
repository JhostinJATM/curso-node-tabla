const fs = require('fs')
const colores = require('colors')

const crearArchivo = async(base = 5, listar = false, limite = 10) =>{

    try{

    let salida, consola = ''
        
    for(let i = 0; i <= limite; i++){
        salida += `${base} x ${i} = ${base}\n`
        consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`
    }

    if (listar){
        console.log("===================".green)
        console.log(`   TABLA DEL ${base}`.blue)
        console.log("===================".green)
        console.log(consola)
    }
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
    return(`Tabla del ${base} creado exitosamente`) 
    }catch(error){
        throw error
    }
    
}

module.exports = {
    crearArchivo
}