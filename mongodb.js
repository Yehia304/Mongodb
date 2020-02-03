const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient

const ConnectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(ConnectionURL,{useNewUrlParser: true},{ useUnifiedTopology: true },(error,client)=>{
if(error){
    return console.log('Unable to connect to Database.')
}

const db = client.db(databaseName)

db.collection('users').insertMany([{
    description : 'Meet her',
    completed : true
},{
    description : 'Love her',
    completed : true
},{
    description : 'Marry her',
    completed : true

}],(error,result)=>{
    if(error){
       return console.log('Error')
    }

    console.log(result.ops)

})

})