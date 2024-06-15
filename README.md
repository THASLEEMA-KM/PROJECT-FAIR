
    MONGO DB
------------------------
    - No structured Query language
    - It is a document database designed for ease of application development and scaling
    - To Run ,
        MongoDB Atlas  : The fully managed service for MongoDB deployments in the cloud
            (use atlas version)
        MongoDB Enterprise  : The subscription-based, self-managed version of MongoDB

        MongoDB Community  : The source-available, free-to-use, and self-managed version of MongoDB
    - used to store and manage data permenently

                    SQL                                                  MongoDB
        -Relational structrd qry lang dbms                  - document orented/NoSql db
        - data stored in table with row nd column           - str data as collctio od json docs
        - uses fixed schema to store (if we want to store   - ysed dynamic schma
        detail of a person, we have to setup 
        those initially,thus it is fixed)
        - optimised for comple join and transaction         - optimised for scalbility and performance
        -support rich set of data types                     - limited set of dayta type 
        - declaratv qyry lang                               - expresv qry lang basd on json
        - ACID Property(atomcty, cnsistncy,                 - NoSQL DB , CAP(consitncy,Avlblty Partitn tolernc)
        isoltion Durblty)
        - Uses traditionl bussnss applctn                   - Used in bigdata & realtime app

    Creating db in mongo
    - db name and collection m=name needed
        no space in db
        collection name must be starts with small letters
        collection name must be in plural form
        fileds must be in dbl quotes
        mongo db will create a new id for all new document which is a hexa decimal object id id stored in key _id
        to show all data bases : show databases
        to switch that db : use dbname
        CRUD opertaions 
            to read all document in a collection : find() (db.collectionName.find())
            to read a documnet in a collection satisfyingthat condition : findOne()
                db.collectionName.findOne({key:value})
                if condtn staisfies then it retrn entired docmnt otherwise retrns null
            insert a data in mongodb collection : db.collectionName.insetOne({key:value})
            insert more than on at a time : db.collectionName.insertMany([{},{},{}...{}])
            we can display total document count : countDocuments()
                db.collectionName.countDocuments()
            we can limit the count of documents  by reading all using limit()
                db.collectionName.find().limit(number to limit)
            we can sort the documents by reading all documents : sort()
                db.collectionName.find().sort({key:(for ascending value as 1, for descending value as 0)})
            we can skip data after sorting : use skip()
                db.collectionName.find().sort({key:value}).skip(the number to be skip)
            we can find documents based on a condition using find(). here args are given as the condition 
                db.collectionName.find({condition as key:value})  
            to querying while reading documents : use $
                $gt/$gte/$lt/$lte
                db.collectionName.find({key:{$gt/$gte/$lt/$lte:value}}) 
                db.users.find({age:{$gte:23,$lte:26}})

                db.users.find({$and:[{age:{$gt:23,$lt:26}}]})

            to get only mentioned docs while reading use $in
                db.collectionName.find({key:{$in:["value","value"]}})
            to check a key is exist or not : $exist()
                db.collectionName.find({key:{$exists:true}})
            to compare multiple fields in the same docmnts use :$epxr
                db.collectionName.find({$expr:{$gt:["$key","$key"]}})
            to update multiple value use updateMany()
                db.collectionName().updateMany({key:value},$set:{key:value})
                db.users.updateMany({age:27},{$set:{age:25}})
            to update single value
                db.collectionName.updateOne({key:value},{$inc:{key:value}}), here ade is incremented by a value(3)
                db.users.updateOne({uname:"Tom"},{$inc:{age:3}})
            to insert a data to an array
                db.collectionName.updateOne()
                db.users.updateOne({uname:"Jerry"},{$push:{hobbies:"Swimming"}})
            to delete a data frm an array
                db.users.updateOne({uname:"Jerry"},{$pull:{hobbies:"Swimming"}})
            to delete a document  deleteOne()
                db.collectionName.deleteOne({key:"value"})
                db.users.deleteOne({key:"value"})
            to delete more than one, use deleteMany()
                db.collectionName.deleteMany({key:{$exists:true}})
                db.users.deleteMany({uname:{$exists:true}})
                
        - Aggregation : used to join multple collection to get common result
                - $lookup : similar to left-outer joining in sql ,  adds a new array field to each input document.
                - Syntax :
                            {
                                $lookup:
                                    {
                                    from: <collection to join>, 
                                    localField: <field from the input documents>,
                                    foreignField: <field from the documents of the "from" collection>,
                                    as: <output array field>
                                    }
                            }
                    - db.users.aggregate({$lookup:{from:"projects",localField:"email",foreignField:"userid",as:"userprojects"}})

        - MongoDB Atlas : cloud version of MongoDB
            - 
        ----------------------------------------------------------------------------------------------------------------------------------
                                           NODE JS SERVER /BACKEND
        ----------------------------------------------------------------------------------------------------------------------------------
        1. its a run time environment , also it have java script libraray for JS
        2. Features
            - Extremely fast
            - Asynchronous
            - Single Threaded with event loop
            - Highly Scalable
            - Open source language
        3. Node JS has Global objects
            - it can be access anywhere from node js app without exporting or importing
            - ex : console.log() , setTimout()
        4. Node JS Module System : A file is considered as module in  node to accesss data from one file it has to export from there and before using it in another file it has to import
            - to import module : require('module name/module path') method
            - to export module : module.exports / exports
            - Built in modules
                - File system : hanling fil e related events
                - http modules : create web server
                - https modules : create web server
                - Events : work with Event eMitter
                - crypto : providing tool like hashing, encryption etc.
                - process : used to provide currently runnning process in the node js app
                    - Environmental variable :- used to hold configuration / confidential data regarding the 
                        project to access environmemtal  variable through out app use 'process.env,variable-name'
        5. Node JS Packages :
            - Used to resolve common problems
            - we have to install package via npm 
            - it adds package.json , package-lock.json file , node_modules
        6. Backend Concepts
            - Client-Server Architecture : 
            - REST API : http requests and data in json
            - CRUD : Create (POST). Read(GET),Update(PUT),Delete(DELETE)
            - CORS : Cross Origin Resource Sharing Protocol is must enabled in server
        7. BACK-END WORKING
                Requests are send to an event queue, then the event loop checks whther it is blocking or non blocking
                then checks the type of the req. 
                The nonblcking req are send to I/O polling and it doesnt need any external libraries,
                The blocking type req are send to a single threaded thread pool. it need external libraries,
                The event loop solves the req one by one. also check whther it needs any externl applction
                if it is a nonblocking it send back the crrsoondng response immedaltly, not much time delay
                if it is a blocking the req are send from a thread pool to the external source like DB, FILE SYSTEM, COMPUTATION,
        8. Node js
            - Server side environment
            - written in C/C++ languages
            - building faster and scalable server side app
            - genereate db queries
            - 



        ----------------------------------------------------------------------------------------
                    EXPRESS JS - FRAMEWORK OF NODE JS
        ----------------------------------------------------------------------------------------
        1. used in Client-Server Architecture as a web server
            - Create folder for server
            - inside folder create package.json using npm init -y
            - we ahve to update  package.json script value as "start" :"node index.js" instead of test
            - Install packages for creating express web server
                - express : npm i express : used to create server
                - cors : npm i cors : used to enable cors
                - dotenv : npm i dotenv : used to load .env file content to process  environmental variable
            - create .env file : to store environmental variable of a project
            - create .gitignore file : used to avoid files and folders while uploading to git
                add node_modules,.env 
            - create index.js file to define express server
                - import all the packages,(dotenv,express,cors)
                - create express server
                - use cors in our express server
                - use json parser in express server
                - create port for server
                - start to listen server app for client
                - resolve get req to server using express
                - Run server app using node index.js
            - Create Routes in express server
                - create a folder
                - create router.js file
                    - import express server
                    - create an object of router class of express
                    - router obj is capable of defining route for app
                    - export router from the file
                    - import router in index.js
                    - use router in express server app
            - Create Controller folder to define loigc to solve client req
                - Create a folder
                - create a js file to define logic to solve clint req
                - import model
                - 
            - Create Models todefine schema and model for mongodb collection using mongoose
                - create a folder
                - create a js file to define schema and model
                    - import mongoose
                    - create schema object to define  structure of the docmnt
                    - create model
                    - export model
            - Create DB connection folder
                - create js file to define db connection
                - get connection string
                - use mongoose to connect db with node js
                - import index.js db file
            - Create Middleware folder
                - create js file to verify jwt token
                    - import token file
                    - create middleware function for defune logic to verify token
                    - export the mddleware
        ------------------------------------------------------------------------------------ 
                        MONGOOSE- ODM(OBJECT DATA MODEL) FOR NODE JS
        ------------------------------------------------------------------------------------ 
        1. install mongoose using : npm i mongoose
        2. Create SChema : Structure of the dcomnt  that we want to store in a collection
            - create obj of schema class
        3. Model : copy of the collection in db
            - create model call model method
            - 
        ---------------------------------------------------------------------
                    JSONWEBTOKEN- for Authentication 
        --------------------------------------------------------------
        used to securely transfer data between 2 webs.
        npm i jsonwebtoken   
        JWT to sign thr token and send it back to the user on a succeful login
        Token creation using JWT use sign(payload,password)
            - payload : it is the data that we want to store inside the token
            - password : can be any data that has to define in .env file    
        Token verification : use verify(token,password)



        
- if we are giving data from the system , that req is not type of application/json, it is a multipart/form-data. for this we create object for that. while sending the req we semd  the reqheader too. also the token is passed with an extra string for more security to the reqheader



        ------------------------------------------------------------------------------
-                    MIDDLE WARE - For connecting applctn effectively
        ------------------------------------------------------------------------------
        1. It is a function with 3 args (req,res,next)
            - req : request object from client
            - res : resonse object from server
            - next : is a method which controlthe requset
        2. can access / control request response cycle 
        3. 2 types of middle wares
            - application specific middle ware : will active for all request coming to the server
                - ex : express.json()
            - router specific middle ware : will active only in a paritcular router

        

        ------------------------------------------------------------------------------
-                    MULTER - Middleware used to resolve multipart/FormData
        ------------------------------------------------------------------------------
        1. Install Multer in server : npm i multer
        2. Multer adds a 'body' object and a 'file' or 'files' object to the 'request' object.
            body object contains the values of the text fields of the form.
            the file or files object contains the files uploaded via the form.
        3. It can handle definng the storage of uploading file in a request
            - create a 'uploads' folder in swrver to hold all uploading file from client
            - define a middleware to apply multer for storing / managing uploading file usijng multer
                - create a js file middleware folder
                - import multer js file 
            - define storage for uploadong file in multer 
                using diskStorage({
                    destination
                })
            - export multer
            - use multer as a router specific middleware