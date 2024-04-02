const service = require("./movies.service");

async function list(req, res) {
    // Access Query parameter
    const isShowing = req.query.is_showing;

    // if (isShowing === "true") {
    //     const data = await service.listMoviesShowing();
    //     res.json({ data })
    // }
    res.json({ data: await service.list() })
}