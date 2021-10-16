const { expect } = require('chai');
const {Event } = require("../../src/db");

describe('Event model', () => {
  describe('Validators', () => {
    beforeEach(() => Author.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Event.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Event.create({ name: 'AfterLife', location:'Germany', date:'2022-10-10', weather:'sunny', userId:11 });
      });
    });
  });
});