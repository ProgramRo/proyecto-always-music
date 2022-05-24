const args = process.argv.slice(2)

const rutEstudiante = args[1]

const consultarEstudiante = async (client) => {
    try {
        await client.connect()
        const res = await client.query(`SELECT * FROM estudiantes WHERE rut = '${rutEstudiante}'`)
        console.log(res.rows)
        await client.end()
    } catch(error) {
        console.log(error)
        await client.end()
    }
}

module.exports =  consultarEstudiante