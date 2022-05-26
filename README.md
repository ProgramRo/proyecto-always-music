# Proyecto Always Music (v0.0.1)
ANTES DE CUALQUIER COSA, CREAR LA BASE DE DATOS!
## Descripción
La escuela de música Always Music es reconocida en la ciudad por graduar a grandes músicos de reconocimiento mundial, sin embargo, a pesar de lo mucho que ha crecido con el tiempo, nunca dejaron de utilizar excel como base de datos y han decidido cambiar esto por un desarrollo personalizado. En este desafío deberás desarrollar una aplicación en Node que realice consultas a PostgreSQL con el paquete “pg” para:

    ● Agregar un nuevo estudiante.   
    ● Consultar los estudiantes registrados.   
    ● Consultar estudiante por rut.   
    ● Actualizar la información de un estudiante.   
    ● Eliminar el registro de un estudiante.   
  
Ya que el caso se trata de un proceso de desarrollo, la interacción la debes realizar con argumentos por la línea de comandos.

## Requerimientos
    1. Realizar la conexión con PostgreSQL con la clase Client.   
    2. Crear una función asíncrona para registrar un nuevo estudiante en la base de datos.   
    3. Crear una función asíncrona para obtener por consola el registro de un estudiante por medio de su rut.   
    4. Crear una función asíncrona para obtener por consola todos los estudiantes registrados.   
    5. Crear una función asíncrona para actualizar los datos de un estudiante en la base de datos.   
    6. Crear una función asíncrona para eliminar el registro de un estudiante de la base de datos.   

# Proyecto Always Music (v0.0.2)
Primeramente, crear base de datos!
## Descripción
La escuela de música Always Music solicitó hacer unas pruebas con el avance del desarrollo del sistema de gestión con base de datos PostgreSQL, se dieron cuenta que no se podían hacer varias consultas de forma simultánea y que al intentar hacer una consulta errónea, no recibían ningún error, dejando la posibilidad de creer que un estudiante fue registrado y que esto no sea así.

En este desafío deberás ocupar la clase Pool definiendo sus diferentes propiedades, capturar los posibles errores en el proceso de conexión con la base de datos y realizar las siguientes consultas, usando textos parametrizados y Prepared Statement:

    ● Agregar un nuevo estudiante.    
    ● Consultar los estudiantes registrados.    
    ● Consultar estudiante por rut.    
    ● Actualizar la información de un estudiante.    
    ● Eliminar el registro de un estudiante.    
    
## Requerimientos
    1. Realizar la conexión con PostgreSQL, utilizando la clase Pool y definiendo un máximo de 20 clientes, 5 segundos como tiempo máximo de inactividad de un cliente y 2 segundos de espera de un nuevo cliente.    
    2. Hacer todas las consultas con un JSON como argumento definiendo la propiedad name para el Prepared Statement.    
    3. Hacer las consultas con texto parametrizado.    
    4. Liberar a un cliente al concluir su consulta.    
    5. Capturar los posibles errores en todas las consultas.    
    6. Retornar por consola un mensaje de error en caso de haber problemas de conexión.    
    7. Obtener el registro de los estudiantes registrados en formato de arreglos.    
