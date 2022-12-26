jest.useFakeTimers();

import { MikroORM } from '@libs/mikro';
import { createModule } from '@libs/testing/module';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { createDatabase, dropDatabase } from '@libs/testing/mikro';

import type { INestApplication } from '@nestjs/common';

import { Test } from 'db/models/Test';
import { TestsController } from 'tests/tests.controller';

describe('Test Controller', () => {
  let orm: MikroORM;
  let app: INestApplication;

  beforeAll(async () => {
    const [, appInstance, mikroOrm] = await createModule({
      ormType: 'mikro',
      entities: [Test],
      driver: PostgreSqlDriver,
      controllers: [TestsController],
    });

    orm = mikroOrm;
    app = appInstance;

    await createDatabase(orm);
    await orm.em.flush();
    await app.init();
  });

  afterAll(async () => {
    await dropDatabase(orm);
    await orm.close(true);
    await app.close();
  });

  describe('test', () => {
    it('test', async () => {
      expect(1).toEqual(1);
    });
  });
});
