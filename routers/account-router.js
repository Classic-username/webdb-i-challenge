const express = require('express')

const db = require('../data/dbConfig')

const router = express.Router()

router.get('/', (req, res) => {
    db.select('*').from('accounts')
    .then(accounts => {
        res.status(200).json(accounts)
    })
    .catch(err => {
        res.status(500).json({message: 'error', error: err})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    db.select('*').from('accounts').where({id})
    .then(acct => {
        res.status(200).json(acct)
    })
    .catch(err => {
        res.status(500).json({message: 'error', error: err})
    })
})

router.post('/', (req, res) => {
    const mom = req.body

    db.insert(mom).into('accounts')
    .then(moms => {
        res.status(201).json(moms)
    })
    .catch(err => {
        res.status(500).json({message: 'error', error: err})
    })
})

router.put('/:id', (req, res) => {
    const id = req.params.id
    const stuff = req.body

    db('accounts').where({id}).update(stuff)
    .then(updAcc => {
        res.status(202).json(updAcc)
    })
    .catch(err => {
        res.status(500).json({message: 'error', error: err})
    })
})

router.delete('/:id', (req, res) => {
    const id = req.params.id

    db.del().from('accounts').where({id})
    .then(fuck => {
        res.status(204).end()
    })
    .catch(why => {
        res.status(500).json({message: 'error', error: why})
    })
})

module.exports = router