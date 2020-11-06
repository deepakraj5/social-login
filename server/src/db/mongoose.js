const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('db connected')
}).catch(() => {
    console.log('db not connected')
})