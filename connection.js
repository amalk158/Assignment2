var mongoose=require('mongoose')

const connection=()=>{
    try {
        mongoose.connect('mongodb+srv://amalk158:rockon1995@cluster0.ak59r.mongodb.net/dbamal?retryWrites=true&w=majority',{UseNewUrlParser:true,UseUnifiedTopology:true})
        console.log('database connected')
    } catch (err) {
        console.log('error to connect database')
    }
}

module.exports=connection