import express from 'express';
const router = express.Router();

//importar el modelo 
import PrimerBd from '../models/primerBd';

//Agregar un registro
router.post('/nuevo-registro', async(req, res)=>{
    const body = req.body;

    try {
        const PrimerDB = await PrimerBd.create(body);
        res.status(200).json(PrimerDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error en la BD', 
            error
        })
    }
});

//Obtener todos los registros
router.get('/todos', async(req, res)=>{
    try {
        const todo = await PrimerBd.find();
        res.status(200).json(todo)
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error en la BD', 
            error
        })
    }
})

//Busqueda por parametros
router.get('/buscar/:id', async(req, res)=>{
    const _id = req.params.id;
    try {
        const PrimerDb = await PrimerBd.findOne({_id});
        res.json(PrimerDb)
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio en la busqueda de parametros', 
            error
        })
    }
})

//Eliminar
router.delete('/eliminar/:id', async(req, res)=>{
    const _id = req.params.id;
    try {
        const PrimerDb = await PrimerBd.findByIdAndDelete({_id});
        if(!PrimerDb){
            return res.status(400).json({
                mensaje: 'No se encontro la mascota',
                error
            })
        }
        res.status(200).json('Registro eliminado');
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error en la BD', 
            error
        })
    }
})

//Actualizar
router.put('/actualizar/:id', async(req, res)=>{
    const id = req.params.id;
    const body = req.body;
    try {
        const actualizar = await PrimerBd.findByIdAndUpdate(
            id, 
            body,{new: true});
        res.status(200).json(actualizar);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'No se pudo actualizar', 
            error
        })
    }
})

//Exportar la configuracion de express
module.exports = router;