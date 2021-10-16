const session = require('supertest-session');
const app = require('../../src/app.js');
var supertest = require('supertest-as-promised')(require('../../src/app'));
var expect = require('chai').expect;
const agent = session(app);

describe("/events", function () {

  it("GET responde con status 200 y listado de eventos",(done) =>  {
   return supertest 
      .get("/events") 
      .expect(200) 
      .expect("Content-Type", /json/), done()
    })

     it("POST agrega un evento", (done) =>  {
       return supertest
         .post("/event")
         .send({ name: 'testing', location:'test', weather:'test', date:'test', userId:11})
         .expect(200), done()})
    
  })