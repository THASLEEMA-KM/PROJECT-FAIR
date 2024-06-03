
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
            