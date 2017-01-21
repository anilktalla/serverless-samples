AWS Serverless "todo" Sample!
===================

This sample implements a sample "todo" application following Serverless architecture which can be deployed to AWS platform. 

![enter image description here](http://cloudacademy.com/blog/wp-content/uploads/2016/05/serverless-framework.png)
> **Note:**

> - This sample is coded in NodeJS.
> - Deploys Restful API's to Amazon API Gateway.
> - Uses Lambda functions for Compute and DynamoDB to persist the state.

**Install serverless**: Open mac terminal and run the following command
    npm install serverless -g

**Create Serverless Project**

    serverless create --template aws-nodejs --name serverless-sample-rest-api --path serverless-sample-rest-api
 
**Create package.json and install required nodejs packages**

    npm install --save aws-sdk uuid

**Create serverless.yml**: Create serverless.yml file in the root directory and define events, handlers and resources as described in the sample

**Create handlers in 'todos' directory**: Create Lambda handlers in 'todos' directory as described in the sample

**Deploy**

    serverless deploy
 
 After deployment is successful, we should see the deployed URL's in the console.

***Try API's***

    curl -X POST https://blahblah.us-east-1.amazonaws.com/dev/todos --data '{"text":"helloworld!!"}'
    curl https://blahblah.us-east-1.amazonaws.com/dev/todos
    curl -X PUT https://blahblah.us-east-1.amazonaws.com/dev/todos/3c5180c0-dc44-11e6-bd7a-018755dc2c60 --data '{"text":"HelloWorld!!***UPDATED***"}'
    curl -X DELETE https://blahblah.us-east-1.amazonaws.com/dev/todos/3c5180c0-dc44-11e6-bd7a-018755dc2c60 

> **Note:**
> -Replace "blahblah" with appropriate hostname.

**View Logs:**

    serverless logs -f get
