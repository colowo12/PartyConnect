const { db, Location, User } = require("./db");
const { green, red } = require("chalk");

const locations = [
  {
    name: "The DL",
    address: "212 E 23rd St",
    coordinates: [40.738339, -73.982616],
  },
  {
    name: "Main Rooftop",
    address: "330 7th Ave",
    coordinates: [40.7477463, -73.9933782],
  },
  {
    name: "Underground Life",
    address: "591 3rd Ave",
    coordinates: [40.7484819, -73.9757962],
  },
  {
    name: "Level Up",
    address: "14 W 14th St",
    coordinates: [40.7361848, -73.9947104],
  },
  {
    name: "Bring The House Down",
    address: "654 Broadway",
    coordinates: [40.7268201, -73.9951986],
  },
];

const users = [
  { name: "Comfort Olowo" },
  { name: "Michael Scott" },
  { name: "Rihanna" },
  { name: "The Weeekend" },
  { name: "Eric Cartman" },
];

const seed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(locations.map((location) => Location.create(location)));
    await Promise.all(users.map((user) => User.create(user)));

    console.log("database has been created");
  } catch (err) {
    console.log(red(err));
  }
};

module.exports = seed;
// If this module is being required from another module, then we just export the
// function, to be used as necessary. But it will run right away if the module
// is executed directly (e.g. `node seed.js` or `npm run seed`)
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch((err) => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
