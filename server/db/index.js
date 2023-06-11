let { Sequelize } = require("sequelize"),
	config = require("./../boot/config"),
	sequelize = new Sequelize(
		config.CONF_DATABASE_NAME,
		config.CONF_DATABASE_USER,
		config.CONF_DATABASE_PASSWORD,
		{
			host: config.CONF_DATABASE_HOST,
			dialect: config.CONF_DATABASE_DIALECT
		}
	)

module.exports = sequelize
