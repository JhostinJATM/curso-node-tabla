
const args = require('yargs')
            .option("b",{
                alias: "base",
                type: "number",
                demandOption:true,
                describe: `Es la base de la tabla de mulitplicar`,
            })
            .option("l",{
                alias: "listar",
                type: "boolean",
                default: false,
                describe: `Muestra la tabla en consola`
            })
            .option("h", {
                alias: "heigth",
                type: "number",
                default: 10,
                describe: "Limite de la tabla de mulitplicar"
            })
            .check((args, options) => {
                if(isNaN(args.b)){
                    throw `La base tiene que ser un numero`
                }
                return true
            })
            .argv

module.exports = args