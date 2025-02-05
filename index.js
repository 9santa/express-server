import express from "express"
const app = express()
const port = 2555

app.listen(port, () => {
	console.log("The server is listening at port " + port + ".")
})

app.get("/", (req, res) => {
	res.send("Hello Express!")
})

app.get("/about", (req, res) => {
	res.send("<h1>This is About Me Page!</h1>")
})

app.get("/contact", (req, res) => {
	res.send("<h1>Contact Me At elonmusk@gmail.com</h1>")
})
