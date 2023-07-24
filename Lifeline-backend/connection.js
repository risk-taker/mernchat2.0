const mongoose = require('mongoose');
require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.discent.mongodb.net/?retryWrites=true&w=majority`, ()=>{
//     console.log('connected to mongodb')
// })

// mongoose.connect(`mongodb+srv://aryankant2202:aryan@2202@cluster0.discent.mongodb.net/?retryWrites=true&w=majority`,()=>{
//     console.log("connect to DB")
// });

// mongoose.connect("mongodb://127.0.0.1:27017/chatapp");

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.t8rjotp.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;
//

