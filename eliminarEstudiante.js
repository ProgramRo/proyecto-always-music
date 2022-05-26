const args = process.argv.slice(2)

const rutEstudiante = args[1]

const eliminarEstudiante = async (client, release, pool) => {
    const SQLQuery = {
        text: 'DELETE FROM estudiantes WHERE rut = $1 RETURNING *',
        name: 'delete-student', // Prepared Statement
        values: [rutEstudiante],
    }
    await client.query(SQLQuery, (errorConsulta, res) => {
        if(errorConsulta) {
            console.error('¡HUBO UN ERROR! Revise el siguiente código:', errorConsulta.code)
            pool.end()
        } else if (res.rowCount === 0) {
            console.log(`No se pudo eliminar el/la estudiante con el rut ingresado (${rutEstudiante}), ya que, no se encuentra registrado/a. Verifique el rut.`)
            pool.end()
        } else {
            console.log(`Registro de estudiante con rut ${rutEstudiante} eliminado/a`)
            release()
            pool.end()
        }
    })
}

module.exports = eliminarEstudiante