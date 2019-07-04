let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {



    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param 
    // You must always end/destroy the DB connection after it's used
    rds.query({
        instanceIdentifier: 'authDatabase',
        query: 'CREATE TABLE users (   UserId int NOT NULL AUTO_INCREMENT,  Email varchar(255) NOT NULL UNIQUE,  Password varchar(255) NOT NULL,  LastName varchar(255),  FirstName varchar(255),  Address varchar(255),  PRIMARY KEY (UserId) );',
        inserts: [("indununil@adroitlogic.com", "123", "Raj", "ind", "Colombo")]
    }, function (error, results, connection) {
        if (error) {
            console.log("Error occurred");
            throw error;
        } else {
            console.log("Success")
            console.log(results);
        }

        connection.end();
    });



    callback(null, { "message": "Successfully executed" });
}