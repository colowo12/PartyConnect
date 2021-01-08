const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/CovidSite", {
  logging: false, // unless you like the logs
  // ...and there are many other options you may want to play with
});

const Location = db.define("locations", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  hours: {
    type: Sequelize.STRING,
    defaultValue: "9am to 6pm",
  },
  capacity: {
    type: Sequelize.INTEGER,
    defaultValue: 100,
  },
  level: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  coordinates: {
    type: Sequelize.ARRAY(Sequelize.DECIMAL),
  },
});

const User = db.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Location.hasMany(User);

module.exports = { db, User, Location };
