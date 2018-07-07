var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/new_todo',
    (err, client) => {
        if (err) {
            return console.log("unable to connected");

        } else {
            console.log("connected");

        }
        var db = client.db('new_todo');
        db.collection('newtododb').insertMany([{
                name: 'susmit',
                age: 21,
                location: 'mumbai'
            }, {
                name: 'aaron',
                age: 22,
                location: 'dharavi'
            }, {
                name: 'selvin',
                age: 33,
                location: 'sera'
            }],
            (err, result) => {
                if (err) {
                    return console.log("data not inserted");

                }
                console.log(JSON.stringify(result.ops, undefined, 2));

            });

        client.close();

    });