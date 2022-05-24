const args = process.argv.slice(2)

const nombreEstudiante = args[1]
const rutEstudiante = args[2]
const cursoEstudiante = args[3]
const nivelEstudiante = args[4]


const agregarEstudiante = async (client) => {
    try {
        await client.connect()
        const res = await client.query(`INSERT INTO estudiantes(nombre, rut, curso, nivel) VALUES('${nombreEstudiante}', '${rutEstudiante}', '${cursoEstudiante}', ${nivelEstudiante}) RETURNING *`)
        console.log(`Estudiante ${nombreEstudiante} agregado/a con éxito!`)
        await client.end()
    } catch (error) {
        console.log(error)
        await client.end()
    }
}

module.exports = agregarEstudiante