const { Client } = require('pg')
const args = process.argv.slice(2)
const consultarLosEstudiantes = require('./consultarLosEstudiantes')
const agregarEstudiante = require ('./agregarEstudiante')
const consultarEstudiante = require ('./consultarEstudiante')
const editarEstudiante = require ('./editarEstudiante')
const eliminarEstudiante = require ('./eliminarEstudiante')

const comandoEjecutar = args[0]

const config = {
    user: 'postgres',
    host: 'localhost',
    database: 'estudiantes_db',
    password: '1234',
    port: 5432,
}

const client = new Client(config)

const ejecutarPrograma = async (comando) => {
    if(comando === 'nuevo') {
        agregarEstudiante(client)
    } else if (comando === 'consulta') {
        consultarLosEstudiantes(client)
    } else if (comando === 'editar') {
        editarEstudiante(client)
    } else if (comando === 'rut') {
        consultarEstudiante(client)
    } else if (comando === 'eliminar') {
        eliminarEstudiante(client)
    } else {
        console.log(error)
    }
}

ejecutarPrograma(comandoEjecutar)