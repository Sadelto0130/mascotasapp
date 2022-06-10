import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const mascotaSchema = new Schema({
    nombre: {type: String, required: [true, 'Nombre obligatorio']},
    especie: String,
    raza: String,
    edad: String,
    date:{type: Date, default: Date.now},
    activo:{type: Boolean, default: true}
});

const primerBd = mongoose.model("primerBd", mascotaSchema);

export default primerBd;