import { defineConfig } from '@mikro-orm/core';

import type { EventSubscriber, MikroORMOptions } from '@mikro-orm/core';

import { MikroNamingStrategy } from './strategy';

interface IConfigParams {
  allowGlobalContext?: boolean;
  dynamicDatabaseName?: boolean;
  subscribers?: EventSubscriber[];
  driver: MikroORMOptions['driver'];
  extensions?: MikroORMOptions['extensions'];
}

export function config({
  driver,
  extensions,
  subscribers,
  allowGlobalContext,
  dynamicDatabaseName = false,
}: IConfigParams): Partial<MikroORMOptions> {
  let dbName = process.env.DB_NAME || 'development';

  if (dynamicDatabaseName) {
    dbName = `test_${(
      new Date().getTime() +
      parseInt(Math.random().toString().replace('.', ''), 10)
    ).toString()}`;
  }

  return defineConfig({
    driver,
    dbName,
    extensions,
    subscribers,
    allowGlobalContext,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    entities: ['./dist/db/models'],
    entitiesTs: ['./src/db/models'],
    password: process.env.DB_PASSWORD,
    namingStrategy: MikroNamingStrategy,
    port: parseInt(process.env.DB_PORT || '', 10),
    debug: process.env.NODE_ENV === 'development',
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
}
