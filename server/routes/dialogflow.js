const express = require('express');
const router = express.Router();
const structjson = require('./structjson.js');
const dialogflow = require('dialogflow');
const uuid = require('uuid');

const config = require('../config/keys');
const { Opinion } = require('../models/Opinion.js');

const projectId = config.googleProjectID
const sessionId = config.dialogFlowSessionID
const languageCode = config.dialogFlowSessionLanguageCode


// Create a new session
const sessionClient = new dialogflow.SessionsClient();
const sessionPath = sessionClient.sessionPath(projectId, sessionId);

// We will make two routes 

// Text Query Route

router.post('/listHotel', async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };    

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    let hotels = [{name: 'Luxe Hotel'}, {name: 'Radison Blu'}, {name: 'Mint' }]

    

    const {name, email, opinion} = {
        name: "Madaliou bouyo",
        opinion: "Order Book room",
        email: "raoulbouyo@gmail.com",
    }

    let opinionMod = new Opinion({
        name,
        opinion,
        email,        
    });

    opinionMod.save();

    res.send(hotels)
})



// Text Query Route

router.post('/textQuery', async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                // The query to send to the dialogflow agent
                text: req.body.text,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    if(result.allRequiredParamsPresent){

        console.log('allRequired ok');

        const name = result.parameters.fields.person.structValue.fields.name.stringValue;
        const email = result.parameters.fields.email.stringValue;
        //const opinion = responses[0].queryResult;
        const rooms = result.parameters.fields.number.numberValue;

        //console.log("the opinion  : ", opinion);
    
        let opinionMod = new Opinion({
            name,
            //opinion,
            email,
            rooms,        
        });
    
        opinionMod.save();
    }

    res.send(result)
})



//Event Query Route

router.post('/eventQuery', async (req, res) => {
    //We need to send some information that comes from the client to Dialogflow API 
    // The text query request.
    const request = {
        session: sessionPath,
        queryInput: {
            event: {
                // The query to send to the dialogflow agent
                name: req.body.event,
                // The language used by the client (en-US)
                languageCode: languageCode,
            },
        },
    };

    // Send request and log result
    const responses = await sessionClient.detectIntent(request);
    console.log('Detected intent');
    const result = responses[0].queryResult;
    console.log(`  Query: ${result.queryText}`);
    console.log(`  Response: ${result.fulfillmentText}`);

    res.send(result)
})







module.exports = router;
