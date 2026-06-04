import type { DynamoDBClientConfig } from "@aws-sdk/client-dynamodb";

export const DB_LOCAL_CONFIG: DynamoDBClientConfig = {
region: "local",
  endpoint: "http://localhost:8000",
  credentials: {
    accessKeyId: "dummy",
    secretAccessKey: "dummy",
  },
} 
