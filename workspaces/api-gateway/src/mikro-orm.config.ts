import { config } from '@libs/mikro';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const mikroConfig = config({
  driver: PostgreSqlDriver,
  allowGlobalContext: true,
});

export default mikroConfig;
