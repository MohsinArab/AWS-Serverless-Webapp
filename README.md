"# AWS-Serverless-Webapp" 
Pre-requisites:
  AWS Accounrt is Required
  IAM Roles shoud be Created for lambda to access the dynampdb

Step 1: Setting Up DynamoDB for Data Storage
  Creating a DynamoDB table.
  Configuring read and write capacity.
  Adding items to the table.

Step 2: Creating and Configuring an S3 Bucket for Static Web Hosting
  Creating an S3 bucket.
  Setting bucket policies for public access.
  Uploading static files (HTML, CSS, JavaScript).
  Configuring the bucket for static website hosting.

Step 3: Developing Lambda Functions for Backend Logic
  Writing a simple Lambda function.
  Setting up the execution role with necessary permissions.
  Deploying the Lambda function.

Step 4: Setting Up API Gateway to Expose Lambda Functions as APIs
  Creating a new API in API Gateway.
  Configuring methods and integrating them with Lambda functions.
  Deploying the API and testing endpoints.

Step 5: Deploying and Testing the Web Application
  Integrating the front-end with the API Gateway.
  Testing the web application end-to-end.
  Demonstrating the interaction between S3, Lambda, DynamoDB, and API Gateway.
