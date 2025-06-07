const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');
const logger = require('../logger');router.get('/', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB
    logger.info('/ called'); and store connection to db constant
        // const db = {{insert code here}}

        Task 2: useawait connectToDatabase();thod to retrieve the gift collection
        // {{insert code here}}

        const collection = db.collection("gifts");fts using the collection.find method. Chain with toArray method to convert to JSON array
        // const gifts = {{insert code here}}

        const gifts = await collection.find({}).toArray(); res.json method
        res.json(/* {{insert code here}} */);
    } catch (e) {
        console.egifts:', e);
        res.status(500).send('Error fetching gifts');
    }
});

router.get('/:id', async (req, res) => {
    try {
        // Task 1: Connect to MongoDB and store connection to db constant
        // const db = {{insert code here}}

        const db = await connectToDatabase();thod to retrieve the gift collection
        // {{insert code here}}

        const collection = db.collection("gifts");d;

        // Task 3: Find a specific gift by ID using the collection.fineOne method and store in constant called gift
        // {{insert code here}}

        const gift = await collection.findOne({ id: id });            return res.status(404).send('Gift not found');
        }

        res.json(gift);
    } catch (e) {
        console.error('Error fetching gift:', e);
        res.status(500).send('Error fetching gift');
    }
});



// Add a new gift
router.post('/', async (req, res, next) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gift = await collection.insertOne(req.body);

        res.status(201).json(gift.ops[0]);
    } catch (e) {
        next(e);
    }
});

module.exports = router;
