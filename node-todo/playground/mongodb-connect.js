const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/ToDoApp',
    (err, client) => {
        if (err) {
            console.log("unable to connect ot mongo db!");

        } else {
            console.log("success in connection!");
        }
        const db = client.db('ToDoApp');
        db.collection('ToDos').insertOne({
            text: 'do something',
            completed: false
        }, (err, result) => {
            if (err) {
                return console.log("unable to insert data");

            }
            console.log(JSON.stringify(result.ops, undefined, 2));

        });
        client.close();

    });