let express = require("express"),
	app = express(),
	session = require("express-session"),
	{ verifyAuthentication } = require("./middleware/authentication"),
	apiRoutes = require("./routes/api.routes"),
	config = require("./boot/config"),
	db = require("./db")

app.use(express.json())
app.use(
	session({
		secret: "message",
		resave: true,
		saveUninitialized: true,
	})
)

app.use((req, res, next) => {
	req.session.loggedIn
	res.locals.user = req.session.user
	next()
})

app.use("/api", apiRoutes)

db.sync().then(() => {
	app.listen(config.CONF_SERVER_PORT)
}).catch((error) => {
	console.error(error)
})