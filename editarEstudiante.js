const args = process.argv.slice(2)

const nombreEstudiante = args[1]
const rutEstudiante = args[2]
const cursoEstudiante = args[3]
const nivelEstudiante = args[4]

const editarEstudiante = async (client) => {
    try {
        await client.connect()
        const res = await client.query(`UPDATE estudiantes SET nombre = '${nombreEstudiante}', curso = '${cursoEstudiante}', nivel = '${nivelEstudiante}' WHERE rut = '${rutEstudiante}' RETURNING *`)
        console.log(`Estudiante ${nombreEstudiante} editado/a con éxito!`)
        await client.end()
    } catch(error) {
        console.log(error)
        await client.end()
    }
}

module.exports = editarEstudiante