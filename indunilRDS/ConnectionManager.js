module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["tutorial-db-instance"] = {
        host: "tutorial-db-instance.c706clkpngya.us-west-2.rds.amazonaws.com",
        port: "3306",
        user: "tutorial_user",
        password: process.env.Password_rdsTutorialDbInstance,
        database: "tutorial_user"
    };
};