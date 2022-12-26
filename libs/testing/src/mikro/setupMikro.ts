import { config } from '@libs/mikro';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import type { DynamicModule } from '@nestjs/common';
import type { AnyEntity, EntityName, MikroORMOptions } from '@libs/mikro';

export interface ISetupMikroParams {
  driver: MikroORMOptions['driver'];
  entities: EntityName<AnyEntity<any>>[];
}

export function setupMikro({
  driver,
  entities,
}: ISetupMikroParams): DynamicModule[] {
  return [
    MikroOrmModule.forRoot(
      config({
        driver,
        allowGlobalContext: true,
        dynamicDatabaseName: true,
      }),
    ),
    MikroOrmModule.forFeature([...entities]),
  ];
}
