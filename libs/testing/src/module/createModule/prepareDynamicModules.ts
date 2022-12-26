import type { DynamicModule } from '@nestjs/common';

import { setupMikro } from '../../mikro/setupMikro';

import type { TOrmType } from './interface';
import type { ISetupMikroParams } from '../../mikro/setupMikro';

interface IPrepareDynamicModulesParams {
  ormType?: TOrmType;
  ormParams: ISetupMikroParams;
}

export function prepareDynamicModules({
  ormType,
  ormParams,
}: IPrepareDynamicModulesParams): DynamicModule[] {
  let result: DynamicModule[] = [];

  switch (ormType) {
    case 'mikro': {
      result = result.concat(setupMikro(ormParams));

      break;
    }
  }

  return result;
}
