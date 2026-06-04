import 'dotenv/config';
import { ListTablesCommand } from '@aws-sdk/client-dynamodb';
import connectDynamoDB from './lib/db.js';

async function main() {
  const env = process.env.NODE_ENV ?? 'remote';
  console.log(`Starting app in "${env}" mode...`);

  try {
    const result = await connectDynamoDB.send(new ListTablesCommand({}));
    console.log('Connected to DynamoDB.');
    console.log('Tables:', result.TableNames ?? []);
  } catch (err) {
    console.error('Failed to connect to DynamoDB:', err);
    process.exitCode = 1;
  } finally {
    connectDynamoDB.destroy();
  }
}

main();
