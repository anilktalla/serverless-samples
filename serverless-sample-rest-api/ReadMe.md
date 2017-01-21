serverless create --template aws-nodejs --name serverless-sample-rest-api --path serverless-sample-rest-api

npm install --save aws-sdk uuid

serverless deploy

curl -X POST https://blahblah.us-east-1.amazonaws.com/dev/todos --data '{"text":"helloworld!!"}'
curl https://blahblah.us-east-1.amazonaws.com/dev/todos
curl -X PUT https://blahblah.us-east-1.amazonaws.com/dev/todos/3c5180c0-dc44-11e6-bd7a-018755dc2c60 --data '{"text":"HelloWorld!!***UPDATED***"}'
curl -X DELETE https://blahblah.us-east-1.amazonaws.com/dev/todos/3c5180c0-dc44-11e6-bd7a-018755dc2c60 

serverless logs -f get