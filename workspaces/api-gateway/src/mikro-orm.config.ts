import { config } from '@libs/mikro';
import { Migrator } from '@mikro-orm/migrations';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

const mikroConfig = config({
  driver: PostgreSqlDriver,
  allowGlobalContext: true,
  extensions: [Migrator],
});

export default mikroConfig;
