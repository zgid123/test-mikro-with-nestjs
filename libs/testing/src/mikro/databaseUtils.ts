import type { MikroORM } from '@libs/mikro';

export async function createDatabase(orm: MikroORM): Promise<void> {
  await orm.getSchemaGenerator().ensureDatabase();
  await orm.getSchemaGenerator().updateSchema();
}

export async function dropDatabase(orm: MikroORM): Promise<void> {
  const { dbName } = orm.config.getAll();

  await orm.getSchemaGenerator().dropDatabase(dbName || 'test');
}

export async function truncateAllTables(orm: MikroORM): Promise<void> {
  await orm.getSchemaGenerator().refreshDatabase();
}
