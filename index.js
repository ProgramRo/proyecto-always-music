const { Pool } = require('pg')

const consultarLosEstudiantes = require('./consultarLosEstudiantes')
const agregarEstudiante = require ('./agregarEstudiante')
const consultarEstudiante = require ('./consultarEstudiante')
const editarEstudiante = require ('./editarEstudiante')
const eliminarEstudiante = require ('./eliminarEstudiante')

const args = process.argv.slice(2)
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
    pool.connect((errorConexion, client, release) => { // errorConexion es por si hay error en la conexion
        if(errorConexion) {
            console.error('¡HUBO UN ERROR! Revise el siguiente código:', errorConexion.code)
        } else {
            if(comando === 'nuevo') {
                agregarEstudiante(client, release, pool)
            } else if (comando === 'consulta') {
                consultarLosEstudiantes(client, release, pool)
            } else if (comando === 'editar') {
                editarEstudiante(client, release, pool)
            } else if (comando === 'rut') {
                consultarEstudiante(client, release, pool)
            } else if (comando === 'eliminar') {
                eliminarEstudiante(client, release, pool)
            } else {
                console.error("Error en la consulta")
            }
        }
    })
}

ejecutarPrograma(comandoEjecutar)