import express from 'express'
import {PORT, mongoDBURL} from "./config.js"
import mongoose from 'mongoose'
import cors from 'cors'
import { MongoClient } from 'mongodb';

const app = express(); 

app.use(express.json());

app.use(cors());

app.use(cors({
    allowedOrigins :["http://localhost:5173","http://localhost:5174","https://azeekk.github.io/bca-department/"],
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeader: ['Content-type'],
}))



app.get( '/', (request,response) => {
    console.log(request)
    return response.status(234).send('welcome to mern stack')
})



//connect database

const uri = 'mongodb+srv://azeekkalathil99:rdx0iaKub9fC7cen@cluster0.ptj38.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // or your MongoDB Atlas URI


// Replace with your database and collection name
const dbName = 'Teachers';
const bcacollectionName = 'BCA';
const bacollectionName = 'BA';
const bcomcollectionName = 'Bcom';

app.get('/api/collections', async (request,response) => {
    
        // Create a new MongoClient
        const client = new MongoClient(uri);
    
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
    
            // Retrieve documents from the collection
            const bcadocuments = await bcacollection.find({}).toArray();
            const badocuments = await bacollection.find({}).toArray();
            const bcomdocuments = await bcomcollection.find({}).toArray();
    
            // Print the documents
            console.log('Documents in the collection:');
            console.log(bcadocuments);
            console.log(badocuments);
            console.log(bcomdocuments);
            response.json(bcadocuments)
            response.json(badocuments)
            response.json(bcomdocuments)
            
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