const args = process.argv.slice(2)

const rutEstudiante = args[1]

const eliminarEstudiante = async (client) => {
    try {
        await client.connect()
        const res = await client.query(`DELETE FROM estudiantes WHERE rut = '${rutEstudiante}' RETURNING *`)
        console.log(`Registro de estudiante con rut ${rutEstudiante} eliminado/a`)
        await client.end()
    } catch(error) {
        console.log(error)
        await client.end()
    }
}

module.exports = eliminarEstudiante