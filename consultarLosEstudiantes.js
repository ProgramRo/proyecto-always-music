const consultarLosEstudiantes = async (client) => {
    await client.connect()
    const res = await client.query("SELECT * FROM estudiantes;")
    console.log(res.rows)
    await client.end()
}

module.exports = consultarLosEstudiantes