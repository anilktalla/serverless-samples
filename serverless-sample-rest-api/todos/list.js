'use strict';

const AWS = require('aws-sdk');

const dynamoDB = new AWS.DynamoDB.DocumentClient();
const params = {
	TableName: 'todos'
}

module.exports.list = (event,context,callback) => {
	dynamoDB.scan(params, (error,result) => {

		if(error){
			console.error(error);
			callback(new Error('Error occurred while fetching todos'));
			return;
		}

		const response = {
			statusCode: 200,
			body: JSON.stringify(result.Items)
		};

		callback(null,response);
	});
}