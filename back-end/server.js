import app from './app.js'
import cloudnairyConnection from './config/cloudConfig.js'
import dbConnection from './config/dbConnection.js'

const port = process.env.PORT || 5000


app.listen(port , ()=>{
    dbConnection()
    cloudnairyConnection()
     console.log(`srver runing${port}`);
    
})