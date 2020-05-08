const mongoose = require('mongoose')

//configuração do mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/appMongoose", {
  useMongoClient: true
}).then(() => {
  console.log("Conectado no banco appMongoose")
}).catch((err) => {
  console.log("Erro ao conectar ao banco" + err)
})