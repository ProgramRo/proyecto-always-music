const args = process.argv.slice(2)

const nombreEstudiante = args[1]
const rutEstudiante = args[2]
const cursoEstudiante = args[3]
const nivelEstudiante = args[4]

const editarEstudiante = async (client, release, pool) => {
    const SQLQuery = {
        text: 'UPDATE estudiantes SET nombre = $1, curso = $3, nivel = $4 WHERE rut = $2 RETURNING *',
        name: 'update-student', // Prepared Statement
        values: [nombreEstudiante, rutEstudiante, cursoEstudiante, nivelEstudiante],
    }
    await client.query(SQLQuery, (errorConsulta, res) => {
        if(errorConsulta) {
            console.error('¡HUBO UN ERROR! Revise el siguiente código:', errorConsulta.code)
            pool.end()
        } else if (res.rowCount === 0) {
            console.log(`No se pudo actualizar el/la estudiante con el rut ingresado (${rutEstudiante}), ya que, no se encuentra registrado/a. Verifique el rut.`)
            pool.end()
        } else {
            console.log(`Estudiante ${nombreEstudiante} editado/a con éxito!`)
            release()
            pool.end()
        }
    })
}

module.exports = editarEstudiante