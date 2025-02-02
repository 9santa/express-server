import express from "express"
const app = express()
const port = 2555

app.listen(port, () => {
	console.log("The server is listening at port " + port + ".")
})

app.get("/", (req, res) => {
	res.send("Hello Express!")
})
