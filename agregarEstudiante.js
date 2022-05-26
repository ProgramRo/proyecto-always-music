const args = process.argv.slice(2)

const nombreEstudiante = args[1]
const rutEstudiante = args[2]
const cursoEstudiante = args[3]
const nivelEstudiante = args[4]


const agregarEstudiante = async (client, release, pool) => {
    const SQLQuery = {
        text: 'INSERT INTO estudiantes(nombre, rut, curso, nivel) VALUES($1, $2, $3, $4) RETURNING *',
        values: [nombreEstudiante, rutEstudiante, cursoEstudiante, nivelEstudiante],
        name: 'add-student', // Prepared Statement
    }
    await client.query(SQLQuery, errorConsulta => {
        if(errorConsulta) {
            console.error('¡HUBO UN ERROR! Revise el siguiente código:', errorConsulta.code)
            pool.end()
        } else {
            console.log(`Estudiante ${nombreEstudiante} agregado/a con éxito!`)
            release()
            pool.end()
        }
    })
}

module.exports = agregarEstudiante