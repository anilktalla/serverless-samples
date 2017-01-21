'use strict';

const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

module.exports.delete = (event,context,callback) => {
	const params = {
		TableName: 'todos',
		Key: {
			id: event.pathParameters.id
		}
	};

	dynamoDB.delete(params,(error) => {

		if(error){
			console.error(error);
			callback(new Error('Error occurred while getting todos'));
			return;
		}

		const response = {
			statusCode: 200,
			body: JSON.stringify({})
		};

		callback(null,response);

	});
}