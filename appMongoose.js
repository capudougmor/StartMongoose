const mongoose = require('mongoose')

//configuração do mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/appMongoose", {
  useMongoClient: true
}).then(() => {
  console.log("Conectado no banco appMongoose")
}).catch((err) => {
  console.log("Erro ao conectar ao banco: " + err)
})

//definindo o model
const UserSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  sobrenome: {
    type: String,
    require: true
  },
  idade: {
    type: Number,
    require:true
  },
  pais: {
    type: String
  }

})

//collection
mongoose.model('usuarios', UserSchema)

const Douglas = mongoose.model('usuarios')

new Douglas({
  nome: "Douglas",
  sobrenome: "Mendes",
  idade: 35,
  pais: "Brasil"
}).save().then(() => {
  console.log("Usuario criado")
}).catch((err) => {
  console.log("Erro ao cadastrar usuario: " +err)
})