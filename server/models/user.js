const db = require("./../db"),
	{ DataTypes } = require("sequelize"),
	User = db.define("users", {
		full_name: {
			type: DataTypes.STRING("255"),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING("255"),
			allowNull: false,
			unique: true
		},
		password: {
			type: DataTypes.STRING("255"),
			allowNull: false
		}
	})

module.exports = User
