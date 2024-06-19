const { Router } = require ("express");


const moviesrouter = require ("./moviesRouter"); 

const router = Router();


router.use("/movies", moviesrouter);
module.exports = router;

