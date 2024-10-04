const path = require("path");

module.exports = {
  development: {
    client: "mysql2",
    connection: {
      host: "127.0.0.1",
      port: 3306,
      user: "user",
      password: "pass", 
      database: "database", 
    },
    migrations: {
      directory: path.resolve("src", "database", "migrations"), 
    },
    useNullAsDefault: true,
  },
};
