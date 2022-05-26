const args = process.argv.slice(2)

const rutEstudiante = args[1]

const consultarEstudiante = async (client, release, pool) => {
    const SQLQuery = {
        text: "SELECT * FROM estudiantes WHERE rut = $1",
        name: "rut-student", // Prepared Statement
        values: [`${rutEstudiante}`],
    }
    await client.query(SQLQuery, (error_consulta, res) => {
        if(error_consulta) {
            console.error('¡HUBO UN ERROR! Revise el siguiente código:', error_consulta.code)
            pool.end()
        } else if (res.rowCount === 0) {
            console.log('Estudiante no encontrado/a')
            pool.end()
        } else {
            console.log(res.rows)
            release()
            pool.end()
        }
    })
}

module.exports =  consultarEstudiante