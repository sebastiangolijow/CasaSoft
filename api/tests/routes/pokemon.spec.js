/* eslint-disable import/no-extraneous-dependencies */
const session = require('supertest-session');
const app = require('../../src/app.js');
// const { Pokemon, conn } = require('../../src/db.js');
var supertest = require('supertest-as-promised')(require('../../src/app'));
var expect = require('chai').expect;
const agent = session(app);
const pokemon = {
  name: 'Pikachu',
};

// describe('Pokemon routes', () => {
//   before(() => conn.authenticate()
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   }));
//   beforeEach(() => Pokemon.sync({ force: true })
//     .then(() => Pokemon.create(pokemon)));
//   describe('GET /pokemons', () => {
//     it('should get 200', () =>
//       agent.get('/pokemons').expect(200)
//     );
//   });
// });

describe("/pokemons", function () {

  it("GET responde con status 200 y listado de pokemons",(done) =>  {
   return supertest 
      .get("/pokemons") 
      .expect(200) 
      .expect("Content-Type", /json/), done()
    })

     it("POST agrega un pokemon", (done) =>  {
       return supertest
         .post("/pokemons")
         .send({ name: "testeando", tipo:"fire", tipo2:"water", fuerza:100, defensa:100 })
         .expect(200), done()})
    

    it("GET responde con status 200 y listado de pokemons", function () {
      return supertest 
         .get("/pokemons?name=pikachu")
         .expect(200)
         .expect("Content-Type", /json/)
       })

       it("GET responde con status 200 y listado de pokemons", function () {
        return supertest
           .get("/pokemons/25") 
           .expect(200)
           .expect("Content-Type", /json/) 
         })
  })