import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import { DB_LOCAL_CONFIG } from '../config/db.local.js';
import {DB_REMOTE_CONFIG} from '../config/db.remote.js';

function getDbConfig() {
  if (process.env.NODE_ENV === 'local') {
    return DB_LOCAL_CONFIG;
  }
  return DB_REMOTE_CONFIG;
}

const connectDynamoDB = new DynamoDBClient(getDbConfig());

export default connectDynamoDB;