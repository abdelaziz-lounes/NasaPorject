const express= require('express');
const {httpGetAllLunches,}= require('./lunches.controller');

const lunchesRouter= express.Router();

lunchesRouter.get('/lunches',httpGetAllLunches);

module.exports= lunchesRouter;