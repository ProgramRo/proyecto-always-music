const consultarLosEstudiantes = async (client, release, pool) => {
    const SQLQuery = {
        rowMode: "array",
        text: "SELECT * FROM estudiantes",
        name: "all-students", // Prepared Statement
        values: [],
    }
    await client.query(SQLQuery, (error_consulta, res) => {
        if(error_consulta) {
            console.error('¡HUBO UN ERROR! Revise el siguiente código:', error_consulta.code)
            pool.end()
        } else {
            console.log(res.rows)
            release()
            pool.end()
        }
    })
}

module.exports = consultarLosEstudiantes