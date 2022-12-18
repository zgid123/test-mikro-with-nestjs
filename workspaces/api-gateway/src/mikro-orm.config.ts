import { Migrator } from '@mikro-orm/migrations';

import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';

const config = defineConfig({
  driver: PostgreSqlDriver,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  entities: ['./dist/db/models'],
  entitiesTs: ['./src/db/models'],
  password: process.env.DB_PASSWORD,
  extensions: [Migrator],
  port: parseInt(process.env.DB_PORT, 10),
  debug: process.env.NODE_ENV === 'development',
  dbName: process.env.DB_NAME || 'demo_development',
  seeder: {
    glob: '!(*.d).{js,ts}',
    path: './dist/db/seeds',
    pathTs: './src/db/seeds',
  },
  migrations: {
    path: './dist/db/migrations',
    pathTs: './src/db/migrations',
  },
});

export default config;
