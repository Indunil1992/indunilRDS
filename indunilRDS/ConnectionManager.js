module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["tutorial-db-instance"] = {
        host: "tutorial-db-instance.c706clkpngya.us-west-2.rds.amazonaws.com",
        port: "3306",
        user: "tutorial_user",
        password: process.env.Password_rdsTutorialDbInstance,
        database: "tutorial_user"
    };
    this.dbConnections["authDatabase"] = {
        host: process.env.EndPoint_rdsAuthDatabase,
        port: process.env.Port_rdsAuthDatabase,
        user: process.env.User_rdsAuthDatabase,
        password: process.env.Password_rdsAuthDatabase,
        database: "sample"
    };
};