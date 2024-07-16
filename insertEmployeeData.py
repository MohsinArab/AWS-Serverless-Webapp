import json
import boto3

# Create a DynamoDB object using the AWS SDK
dynamodb = boto3.resource('dynamodb')
# Use the DynamoDB object to select our table
table = dynamodb.Table('EmployeeInfo')

# Define the handler function that the Lambda service will use as an entry point
def lambda_handler(event, context):
    # Extract values from the event object we got from the Lambda service and store in variables
    employee_id = event['EmployeeID']
    name = event['name']
    employee_company = event['company']
    designation = event['designation']
    
    # Write student data to the DynamoDB table and save the response in a variable
    response = table.put_item(
        Item={
            'EmployeeID': employee_id,
            'name': name,
            'company': employee_company,
            'designation': designation
        }
    )
    
    # Return a properly formatted JSON object
    return {
        'statusCode': 200,
        'body': json.dumps('Employee data saved successfully!')
    }
