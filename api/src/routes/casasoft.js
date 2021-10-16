const express = require("express");
const router = require("express").Router();
const axios = require("axios").default;
const {User, Event } = require("../db.js");
const { conn } = require("../db.js");
const { Op } = require("sequelize");


router.get("/", (req, res) => {
  res.send("<h1>Welcome to CasaSoft</h1>");
});

router.get("/events", async (req, res) => {
  try {
     const event = await Event.findAll();
      if (event) {
        return res.json(event);
      }
  } catch (err) {
    return res.status(400).send("<h1>events not found</h1>");
  }
});


router.get('/event/:id', async (req, res) => {
    let {id} = req.params;
    const eventFind = await Event.findByPk(id);
    eventFind && res.json(eventFind);
});

router.get("/users", async (req, res) => {
  try {
     const user = await User.findAll();
      if (user) {
        return res.json(user);
      }
  } catch (err) {
    return res.status(400).send("<h1>user not found</h1>");
  }
});

router.get('/user/:id', async (req, res) => {
  let {id} = req.params;
  const userFind = await User.findByPk(id);
  userFind ? res.json(userFind) : console.log('user not find')
});

router.post("/user", async (req, res) => {
  const { email, password} = req.body;
  try {
    const user = await User.findOrCreate({
      where: { email, password},
    });
    res.json(user)
  } catch (error) {
    res.sendStatus(404 + error);
  }
});

router.post("/event", async (req, res) => {
  const { name, date, location, weather, userId} = req.body;
  try {
    const event = await Event.findOrCreate({
      where: { name, date, location, weather, userId},
      include: { model: User },
    });   
    res.json(event)
  } catch (error) {
    res.sendStatus(404 + error);
  }
});


router.put('/event/:id', async function (req, res) {
  let {id} = req.params;
  let {name, date, location, weather, userId} = req.body;
  try { 
    const event = await Event.update(
    {name, date, location, weather, userId },
    {where: {id} }
  );
  res.json(event)
  console.log(name, date, location, weather, userId)
 } catch(err) {
   console.log(err)
 }
});

module.exports = router;
