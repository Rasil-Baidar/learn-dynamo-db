import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";

export const DB_REMOTE_CONFIG: DynamoDBClientConfig = {
region: process.env.AWS_REGION as string,
credentials: {
  accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
},
} 
