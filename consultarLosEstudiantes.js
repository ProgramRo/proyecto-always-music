const consultarLosEstudiantes = async (client, release, pool) => {
    const SQLQuery = {
        rowMode: 'array',
        text: 'SELECT * FROM estudiantes',
        name: 'all-students', // Prepared Statement
    }
    await client.query(SQLQuery, (errorConsulta, res) => {
        if(errorConsulta) {
            console.error('¡HUBO UN ERROR! Revise el siguiente código:', errorConsulta.code)
            pool.end()
        } else {
            console.log(res.rows)
            release()
            pool.end()
        }
    })
}

module.exports = consultarLosEstudiantes