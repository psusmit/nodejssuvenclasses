var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/new_todo',
    (err, client) => {
        if (err) {
            return console.log("unable to connected");

        } else {
            console.log("connected");

        }
        var db = client.db('new_todo');
        db.collection('newtododb').findOneAndUpdate({
                name: 'aaron'
            }, {
                $set: { name: 'zzz' }
            }, {
                returnOriginal: false
            }).then(
                (updated) => {
                    console.log("record updated...");
                    console.log(updated);


                }),
            (err) => {
                if (err) {
                    return console.log("data not inserted");

                }


            };

        client.close();

    });