const { Router } = require ("express");


const moviesrouter = require ("./moviesrouter"); 

const router = Router();

router.use("/movies", moviesrouter);

module.exports = router;