module.exports = {
	server_port: 3000,
    devServer_port: 4000,
	db_url: 'mongodb://localhost/local3',
	db_schemas: [
	    {file:'./user_schema', collection:'Users', schemaName:'UserSchema', modelName:'UserModel'}
	],
	route_info: [
	]
}
