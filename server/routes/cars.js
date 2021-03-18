const {Router} = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.send("ateityje grazinsiu masinas")
})

router.post("/", (req, res) => {
    res.send("ateityje idesiu 1 masina")
})

router.patch("/:id", (req, res) => {
    res.send("ateityje atnaujinsiu 1 masina")
})

router.delete("/:id", (req, res) => {
    res.send("ateityje istrinsiu 1 masina")
})

module.exports = router;
