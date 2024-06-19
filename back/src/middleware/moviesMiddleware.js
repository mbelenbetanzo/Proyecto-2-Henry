function movieValidation(req,res,next) {
    const requiredFields = ["title", "year", "director", "duration", "genre", "rate", "poster"]
    const missingFields = requiredFields.filter((field) => !req.body[field])

    if(missingFields.length > 0) {
        return res.status(400).json({
            message: `Faltan los siguientes campos: ${missingFields.join(", ")}`
        })
    } else {
        return next()
    };
}

module.exports = {
    movieValidation
}