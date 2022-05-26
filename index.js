const { Pool } = require('pg')
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
    password: '1234',
    database: 'estudiantes_db',
    port: 5432,
    max: 20, // cantidad máxima de clientes conectados
    idleTimeoutMillis: 5000, // cantidad de milisegundos en que un usuario puede estar inactivo
    connectionTimeoutMillis: 2000, //cantidad de milisegundos de espera para que un nuevo usuario pueda conectarse
}

const pool = new Pool(config)

const ejecutarPrograma = async (comando) => {
    pool.connect((error_conexion, client, release) => { // error_conexion es por si hay error en la conexion
        if(comando === 'nuevo') {
            if(error_conexion) {
                console.error('¡HUBO UN ERROR! Revise el siguiente código:', error_conexion.code)
            } else {
                agregarEstudiante(client, release, pool)
            }
        } else if (comando === 'consulta') {
            if(error_conexion) {
                console.error('¡HUBO UN ERROR! Revise el siguiente código:', error_conexion.code)
            } else {
                consultarLosEstudiantes(client, release, pool)
            }
        } else if (comando === 'editar') {
            if(error_conexion) {
                console.error('¡HUBO UN ERROR! Revise el siguiente código:', error_conexion.code)
            } else {
                editarEstudiante(client, release, pool)
            }
        } else if (comando === 'rut') {
            if(error_conexion) {
                console.error('¡HUBO UN ERROR! Revise el siguiente código:', error_conexion.code)
            } else {
                consultarEstudiante(client, release, pool)
            }
        } else if (comando === 'eliminar') {
            if(error_conexion) {
                console.error('¡HUBO UN ERROR! Revise el siguiente código:', error_conexion.code)
            } else {
                eliminarEstudiante(client, release, pool)
            }
        } else {
            console.error("Error en la consulta")
        }
    })
}

ejecutarPrograma(comandoEjecutar)