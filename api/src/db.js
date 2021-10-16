require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const DB_USER='postgres';
const DB_PASSWORD='sebapinchacapo';
const DB_HOST='localhost';
const { DataTypes } = require('sequelize');


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/casasoft`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

sequelize.authenticate()
    .then(() => {
    console.log('running');
})
.catch (error => {
    console.log(error);
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const User = sequelize.define('user', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Event = sequelize.define('event', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  weather: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});


User.hasMany(Event);
Event.belongsTo(User);

// sequelize.sync({ force: false }).then(async() => {
//  const user = await User.create({
//    email:'sebagoli@Gmail.com',
//    password:'sebapinchacapo'
//  })
//  .catch((err)=> {
//   console.log(err);
// });

//  const event = await Event.create({
//    name:'Circo Loco',
//    date:12-12-12,
//    location:'spain',
//    weather:'rain'
//  })
 
//  await event.setUser(user)

//  .catch((err)=> {
//    console.log(err);
//  });
// });


module.exports = {
  User, Event, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};