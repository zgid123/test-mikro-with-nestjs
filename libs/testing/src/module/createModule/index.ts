import { Test } from '@nestjs/testing';
import { MikroORM } from '@libs/mikro';

import type { TestingModule } from '@nestjs/testing';
import type { ModuleMetadata, INestApplication } from '@nestjs/common';

import { setupModules } from '../globalModules';
import { prepareDynamicModules } from './prepareDynamicModules';

import type { TOrmType } from './interface';
import type { ISetupModulesParams } from '../globalModules';
import type { ISetupMikroParams } from '../../mikro/setupMikro';

interface IBaseCreateModuleParams<T extends TOrmType>
  extends Partial<ISetupModulesParams>,
    ModuleMetadata {
  ormType?: T;
}

export type TCreateModuleParams<T extends TOrmType> = T extends 'mikro'
  ? IBaseCreateModuleParams<T> & ISetupMikroParams
  : IBaseCreateModuleParams<T>;

export type TCreateModuleReturn<T extends TOrmType> = T extends 'mikro'
  ? [TestingModule, INestApplication, MikroORM]
  : [TestingModule, INestApplication];

export async function createModule<T extends TOrmType = 'none'>(
  {
    ormType,
    routes = [],
    imports = [],
    exports = [],
    providers = [],
    controllers = [],
    ...rest
  }: TCreateModuleParams<T> = {} as TCreateModuleParams<T>,
): Promise<TCreateModuleReturn<T>> {
  const dynamicModules = prepareDynamicModules({
    ormType,
    ormParams: rest as unknown as ISetupMikroParams,
  });

  const module = await Test.createTestingModule({
    imports: [
      ...setupModules({
        routes,
      }),
      ...dynamicModules,
      ...imports,
    ],
    controllers,
    providers,
    exports,
  }).compile();

  const app = module.createNestApplication();
  const result: any = [module, app];

  switch (ormType) {
    case 'mikro': {
      result.push(module.get<MikroORM>(MikroORM));
      break;
    }
  }

  return result;
}
