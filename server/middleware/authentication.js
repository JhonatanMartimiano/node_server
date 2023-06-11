function verifyAuthentication(req, res, next) {
	if (!req.session.loggedIn) {
		req.session.user = null
		res.redirect("/login")
		return
	}
	next()
}

module.exports = {
	verifyAuthentication
}
