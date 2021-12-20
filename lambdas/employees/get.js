const AWS = require('aws-sdk');
const dynamo = new AWS.DynamoDB.DocumentClient();

exports.handler = function(e, ctx, callback) {
    let table = {
        TableName: "employees-dev",
        Limit: 100
    }

    dynamo.scan(table, function (err, data) {
        if(err){
            callback(err, null)
        }else {
            callback(null, data)
        }
    })
};

