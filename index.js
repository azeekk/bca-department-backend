import express from 'express'
import {PORT, mongoDBURL} from "./config.js"
import mongoose from 'mongoose'
import cors from 'cors'
import { MongoClient } from 'mongodb';

const app = express(); 

app.use(express.json());

app.use(cors());

app.use(cors({
    allowedOrigins :["https://azeekk.github.io/bca-department/","https://bca-department-backend-production.up.railway.app/api/collections","https://azeekk.github.io"],
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeader: ['Content-type'],
}))



app.get( '/', (request,response) => {
    console.log(request)
    return response.status(200).send('welcome to mern stack')
})



//connect database

const uri = mongoDBURL;

// Replace with your database and collection name
const dbName = 'Teachers';
const bcacollectionName = 'BCA';
const bacollectionName = 'BA';
const bcomcollectionName = 'Bcom';
const bbacollectionName = 'BBA';
const bsccollectionName = 'BSC';

app.get('/api/collections', async (request,response) => {
    
        // Create a new MongoClient
        const client = new MongoClient(mongoDBURL);
    
        try {
            // Connect to the MongoDB server
            await client.connect();
            console.log('Connected to MongoDB');
    
            // Get the database
            const db = client.db(dbName);
    
            // Get the specific collection
            const bcacollection = db.collection(bcacollectionName);
            const bacollection = db.collection(bacollectionName);
            const bcomcollection = db.collection(bcomcollectionName);
            const bbacollection = db.collection(bbacollectionName);
            const bsccollection = db.collection(bsccollectionName);
    
            // Retrieve documents from the collection
            const bcadocuments = await bcacollection.find({}).toArray();
            const badocuments = await bacollection.find({}).toArray();
            const bcomdocuments = await bcomcollection.find({}).toArray();
            const bbadocuments = await bbacollection.find({}).toArray();
            const bscdocuments = await bsccollection.find({}).toArray();
    
            // Print the documents
            console.log('Documents in the collection:');
            console.log(bcadocuments);
            console.log(badocuments);
            console.log(bcomdocuments);
            console.log(bbadocuments);
            console.log(bscdocuments)
            
            response.json({
                BCA: bcadocuments,
                BA: badocuments,
                Bcom: bcomdocuments,
                BBA:bbadocuments,
                BSC:bscdocuments
            });
            response.send({
                BCA: bcadocuments,
                BA: badocuments,
                Bcom: bcomdocuments,
                BBA:bbadocuments,
                BSC:bscdocuments
            });
            
        } catch (err) {
            console.error('Error:', err);
        } finally {
            // Close the connection
            await client.close();
        }
    }
    
)





mongoose.connect(mongoDBURL)
.then(() => {
console.log('app connected to database');
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`)
})
})
.catch((error) => {
    console.log(error);
   
})