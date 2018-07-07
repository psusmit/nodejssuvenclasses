var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/new_todo',
    (err, client) => {
        if (err) {
            return console.log("unable to connected");

        } else {
            console.log("connected");

        }
        var db = client.db('new_todo');
        db.collection('newtododb').findOneAndDelete({
                name: 'susmit'
            }, {
                returnOriginal: false
            }).then(
                (del) => {
                    console.log("record deleted...");
                    console.log(del);


                }),
            (err) => {
                if (err) {
                    return console.log("data not inserted");

                }


            };

        client.close();

    });