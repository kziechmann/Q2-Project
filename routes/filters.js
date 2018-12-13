'use strict'

var express = require('express')
var router = express.Router()
let knex = require('../knex')

/* GET home page. */

router.get('/', (req, res, next) => {
  knex('filters')
    .then((filter) => {
      res.send(filter)
    })
    .catch((err) => {
      next(err)
    })
})

router.post('/', (req, res, next) => {
  knex('filters')
    .then(data => {
      res.send(data)
    })
})

router.get('/', (req, res, next) => {
  knex('filters')
    .then(data => {
      res.send(data)
    })
})

router.delete('/filters/:id', (req, res, next) => {
  return knex('filters')
    .where('id', req.params.id)
    .del('*')
    .then((filters) => {
      if (!filters.length) {
        return next()
      }
      const filter = filters[0]
      // delete filter.id
      delete filter.id
      res.send(filter)
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
