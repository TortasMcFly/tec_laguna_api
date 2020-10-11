'use strict'
const User = require('../models/user')

function getKardex(req, res) 
{
    let user_id = req.user
    User.findById(user_id, (err, user) => {

        if(err) return res.status(500).send({message: err})
        if(!user) return res.status(404).send({message: 'No existe el usuario'})

        res.status(200).send({
            "materias": [
                {
                    "Clave": "D11",
                    "Materia": "MATEMATICAS DISCRETAS",
                    "Calificación": 88,
                    "Periodo 1": "AGO - DIC/16",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 1,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "C11",
                    "Materia": "TALLER DE ETICA",
                    "Calificación": 80,
                    "Periodo 1": "AGO - DIC/16",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 1,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "F11",
                    "Materia": "FUNDAMENTOS DE INVESTIGACION",
                    "Calificación": 80,
                    "Periodo 1": "AGO - DIC/16",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 1,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "B11",
                    "Materia": "FUNDAMENTOS DE PROGRAMACION",
                    "Calificación": 100,
                    "Periodo 1": "AGO - DIC/16",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 1,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "A11",
                    "Materia": "CALCULO DIFERENCIAL",
                    "Calificación": 90,
                    "Periodo 1": "AGO - DIC/16",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 1,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "E11",
                    "Materia": "TALLER DE ADMINISTRACION",
                    "Calificación": 85,
                    "Periodo 1": "AGO - DIC/16",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 1,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "C12",
                    "Materia": "DESARROLLO SUSTENTABLE",
                    "Calificación": 90,
                    "Periodo 1": "ENE - JUN/17",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 2,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "D12",
                    "Materia": "QUIMICA",
                    "Calificación": 85,
                    "Periodo 1": "ENE - JUN/17",
                    "Periodo 2": "VERANO/17",
                    "Periodo 3": "/",
                    "Semestre1": 2,
                    "Semestre2": 2,
                    "Semestre3": ""
                },
                {
                    "Clave": "A12",
                    "Materia": "CALCULO INTEGRAL",
                    "Calificación": 70,
                    "Periodo 1": "ENE - JUN/17",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 2,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "F12",
                    "Materia": "PROBABILIDAD Y ESTADISTICA",
                    "Calificación": 90,
                    "Periodo 1": "ENE - JUN/17",
                    "Periodo 2": "ENE - JUN/18",
                    "Periodo 3": "/",
                    "Semestre1": 2,
                    "Semestre2": 3,
                    "Semestre3": ""
                },
                {
                    "Clave": "B12",
                    "Materia": "PROGRAMACION ORIENTADA A OBJETOS",
                    "Calificación": 100,
                    "Periodo 1": "ENE - JUN/17",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 2,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "E12",
                    "Materia": "ALGEBRA LINEAL",
                    "Calificación": 92,
                    "Periodo 1": "ENE - JUN/17",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 2,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "F14",
                    "Materia": "PRINCIPIOS ELECTRICOS Y APLICACIONES DIGITALES",
                    "Calificación": 90,
                    "Periodo 1": "AGO - DIC/18",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 4,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "E13",
                    "Materia": "SISTEMAS OPERATIVOS",
                    "Calificación": 87,
                    "Periodo 1": "AGO - DIC/18",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 4,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "D13",
                    "Materia": "INVESTIGACION DE OPERACIONES",
                    "Calificación": 100,
                    "Periodo 1": "AGO - DIC/18",
                    "Periodo 2": "ENE - JUN/19",
                    "Periodo 3": "/",
                    "Semestre1": 4,
                    "Semestre2": 6,
                    "Semestre3": ""
                },
                {
                    "Clave": "B14",
                    "Materia": "TOPICOS AVANZADOS DE PROGRAMACION",
                    "Calificación": 90,
                    "Periodo 1": "AGO - DIC/18",
                    "Periodo 2": "ENE - JUN/19",
                    "Periodo 3": "/",
                    "Semestre1": 4,
                    "Semestre2": 6,
                    "Semestre3": ""
                },
                {
                    "Clave": "C17",
                    "Materia": "GRAFICACION",
                    "Calificación": 95,
                    "Periodo 1": "AGO - DIC/18",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 4,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "F13",
                    "Materia": "FISICA GENERAL",
                    "Calificación": 94,
                    "Periodo 1": "ENE - JUN/18",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 3,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "B13",
                    "Materia": "ESTRUCTURA DE DATOS",
                    "Calificación": 100,
                    "Periodo 1": "ENE - JUN/18",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 3,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "C14",
                    "Materia": "FUNDAMENTOS DE BASES DE DATOS",
                    "Calificación": 75,
                    "Periodo 1": "ENE - JUN/18",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 3,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "A13",
                    "Materia": "CALCULO VECTORIAL",
                    "Calificación": 73,
                    "Periodo 1": "ENE - JUN/18",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 3,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "C13",
                    "Materia": "CONTABILIDAD FINANCIERA",
                    "Calificación": 100,
                    "Periodo 1": "ENE - JUN/18",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 3,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "A14",
                    "Materia": "ECUACIONES DIFERENCIALES",
                    "Calificación": 84,
                    "Periodo 1": "VERANO/18",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 3,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "B16",
                    "Materia": "INGENIERIA DE SOFTWARE",
                    "Calificación": 98,
                    "Periodo 1": "AGO - DIC/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 7,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "F17",
                    "Materia": "PROGRAMACION WEB",
                    "Calificación": 100,
                    "Periodo 1": "AGO - DIC/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 7,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "E15",
                    "Materia": "FUNDAMENTOS DE TELECOMUNICACIONES",
                    "Calificación": 80,
                    "Periodo 1": "AGO - DIC/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 7,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "A16",
                    "Materia": "LENGUAJES Y AUTOMATAS I",
                    "Calificación": 94,
                    "Periodo 1": "AGO - DIC/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 7,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "D16",
                    "Materia": "SIMULACION",
                    "Calificación": 80,
                    "Periodo 1": "AGO - DIC/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 7,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "F16",
                    "Materia": "LENGUAJES DE INTERFAZ",
                    "Calificación": 73,
                    "Periodo 1": "AGO - DIC/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 7,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "E14",
                    "Materia": "TALLER DE SISTEMAS OPERATIVOS",
                    "Calificación": 75,
                    "Periodo 1": "AGO - DIC/19",
                    "Periodo 2": "ENE - JUN/2020",
                    "Periodo 3": "/",
                    "Semestre1": 7,
                    "Semestre2": 8,
                    "Semestre3": ""
                },
                {
                    "Clave": "G16",
                    "Materia": "TALLER DE INVESTIGACION II",
                    "Calificación": 100,
                    "Periodo 1": "AGO - DIC/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 7,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "C15",
                    "Materia": "TALLER DE BASE DE DATOS",
                    "Calificación": 94,
                    "Periodo 1": "ENE - JUN/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 6,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "B15",
                    "Materia": "FUNDAMENTOS DE INGENIERIA DE SOFTWARE",
                    "Calificación": 95,
                    "Periodo 1": "ENE - JUN/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 6,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "F15",
                    "Materia": "ARQUITECTURA DE COMPUTADORAS",
                    "Calificación": 75,
                    "Periodo 1": "ENE - JUN/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 6,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "G15",
                    "Materia": "TALLER DE INVESTIGACION I",
                    "Calificación": 100,
                    "Periodo 1": "ENE - JUN/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 6,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "A15",
                    "Materia": "METODOS NUMERICOS",
                    "Calificación": 83,
                    "Periodo 1": "VERANO/19",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 7,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "A18",
                    "Materia": "PROGRAMACION LOGICA Y FUNCIONAL",
                    "Calificación": 98,
                    "Periodo 1": "ENE - JUN/2020",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 8,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "A17",
                    "Materia": "LENGUAJES Y AUTOMATAS II",
                    "Calificación": 98,
                    "Periodo 1": "ENE - JUN/2020",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 8,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "51W",
                    "Materia": "DESARROLLO DE HABILIDADES PROFESIONALES EN INFORMATICA",
                    "Calificación": 85,
                    "Periodo 1": "ENE - JUN/2020",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 8,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "B18",
                    "Materia": "INTELIGENCIA ARTIFICIAL",
                    "Calificación": 96,
                    "Periodo 1": "ENE - JUN/2020",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 8,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "21W",
                    "Materia": "DESARROLLO EN ANDROID",
                    "Calificación": 98,
                    "Periodo 1": "ENE - JUN/2020",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 8,
                    "Semestre2": null,
                    "Semestre3": ""
                },
                {
                    "Clave": "E18",
                    "Materia": "ADMINISTRACION DE REDES",
                    "Calificación": 92,
                    "Periodo 1": "ENE - JUN/2020",
                    "Periodo 2": "/",
                    "Periodo 3": "/",
                    "Semestre1": 8,
                    "Semestre2": null,
                    "Semestre3": ""
                }
            ],
            "promedio": 89
        })
    })
}

function getCargaAcademica(req, res) 
{
    let user_id = req.user
    User.findById(user_id, (err, user) => {

        if(err) return res.status(500).send({message: err})
        if(!user) return res.status(404).send({message: 'No existe el usuario'})

        res.status(200).send([
            {
              "Grupo": "F18B",
              "Materia": "SISTEMAS PROGRAMABLES",
              "Profesor": "MAESTRO POR ASIGNAR",
              "Lunes": "18:00-19:00/AA6",
              "Martes": "18:00-19:00/AA6",
              "Miercoles": "18:00-19:00/AA6",
              "Jueves": "18:00-19:00/AA6",
              "Viernes": "-/",
              "Sabado": "-/"
            },
            {
              "Grupo": "E16B",
              "Materia": "REDES DE COMPUTADORAS",
              "Profesor": "SANTIAGO BARRAGAN ANTONIO DE",
              "Lunes": "14:00-15:00/19D",
              "Martes": "14:00-15:00/19D",
              "Miercoles": "14:00-15:00/AA7",
              "Jueves": "14:00-15:00/AA7",
              "Viernes": "14:00-15:00/19D",
              "Sabado": "-/"
            },
            {
              "Grupo": "C18C",
              "Materia": "CULTURA EMPRESARIAL",
              "Profesor": "DE LA PEÑA MARTINEZ RUTH",
              "Lunes": "13:00-14:00/19J",
              "Martes": "13:00-14:00/19J",
              "Miercoles": "13:00-14:00/19J",
              "Jueves": "13:00-14:00/19J",
              "Viernes": "-/",
              "Sabado": "-/"
            },
            {
              "Grupo": "41WA",
              "Materia": "DESARROLLO EN IOS",
              "Profesor": "VALDES ALVARADO MARTIN OSWALDO",
              "Lunes": "10:00-11:00/19M",
              "Martes": "10:00-11:00/19M",
              "Miercoles": "10:00-11:00/19M",
              "Jueves": "10:00-11:00/19M",
              "Viernes": "10:00-11:00/19M",
              "Sabado": "-/"
            },
            {
              "Grupo": "C16A",
              "Materia": "ADMINISTRACION DE BASE DE DATOS",
              "Profesor": "MAESTRO POR ASIGNAR",
              "Lunes": "07:00-08:00/19M",
              "Martes": "07:00-08:00/19M",
              "Miercoles": "07:00-08:00/19M",
              "Jueves": "07:00-08:00/19M",
              "Viernes": "07:00-08:00/19M",
              "Sabado": "-/"
            },
            {
              "Grupo": "B17B",
              "Materia": "GESTION DE PROYECTOS DE SOFTWARE",
              "Profesor": "FLORES BARAJAS SILVANA MARIN",
              "Lunes": "17:00-18:00/AA5",
              "Martes": "17:00-18:00/AA5",
              "Miercoles": "17:00-18:00/AA5",
              "Jueves": "17:00-18:00/AA5",
              "Viernes": "16:00-18:00/AA6",
              "Sabado": "-/"
            }
           ])
    })
}

module.exports = {
    getKardex,
    getCargaAcademica
}