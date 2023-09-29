
const {crearArchivo} = require('./helpers/multiplicar')
const args = require("./config/yargs")
const colores = require('colors')

console.clear()
// const [,,arg3 = "base=5"] = process.argv
// const [, base=5] = arg3.split("=")


// console.log(process.argv)
// console.log(args)
// console.log('base: yargs', args.base)

crearArchivo(args.b, args.l, args.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, "Creado Exitosamente"))
    .catch(error => console.log(error))
