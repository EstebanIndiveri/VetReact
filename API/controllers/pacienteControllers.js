const Paciente=require('../models/Paciente');

//cuando se crea un nuevo cliente
exports.nuevoCliente=async (req,res,next)=>{

    //creo objeto:
    const paciente=new Paciente(req.body);
    //TODO: insertar en la base de datos
    try{
        await paciente.save();
        res.json({mensaje:'El cliente se agrego correctamente'});
    }catch(error){
        console.log(error);
        next();
    }
}

//obitene pacientes
exports.obtenerPacientes=async (req,res,next)=>{
    try{
        const pacientes=await Paciente.find({});
        res.json(pacientes);
    }catch(error){
        console.log(error);
        next();
    }
}

//trae paciente por Id
exports.obtenerPaciente=async (req,res,next)=>{
    try{
        const paciente=await Paciente.findById(req.params.id);
        res.json(paciente);
    }catch(error){
        console.log(error);
        next();
    }
}
exports.actualizarPaciente=async (req,res,next)=>{
    try{
        const paciente=await Paciente.findOneAndUpdate({_id:req.params.id},req.body,{
            new:true
        });
        res.json(paciente);
    }catch(error){
        console.log(error);
        next();
    }
}

exports.eliminarPaciente=async(req,res,next)=>{
    try {
        const paciente=await Paciente.findOneAndDelete({_id:req.params.id});
        res.json({mensaje:`El paciente: ${paciente.nombre}, del propietario: ${paciente.propietario}, fue eliminado`});
    } catch (error) {
        console.log(erro);
        next();
    }
}