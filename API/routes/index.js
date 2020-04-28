const express=require('express');
const router=express.Router();
const pacienteController=require('../controllers/pacienteControllers')

module.exports=function(){


    //agrega nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    //todos los registros:
    router.get('/pacientes',
    pacienteController.obtenerPacientes
    );

    //obtiene un paciente por id:
    router.get('/pacientes/:id',
    pacienteController.obtenerPaciente
    )

    //actualizo
    router.put('/pacientes/:id',
    pacienteController.actualizarPaciente
    )
    
    //elimina paciente 
    router.delete('/pacientes/:id',
    pacienteController.eliminarPaciente
    )

    return router    
}