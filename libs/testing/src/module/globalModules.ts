import { RouterModule } from '@nestjs/core';

import type { Routes } from '@nestjs/core';
import type { DynamicModule } from '@nestjs/common';

export interface ISetupModulesParams {
  routes?: Routes;
}

export function setupModules({
  routes = [],
}: ISetupModulesParams): DynamicModule[] {
  return [RouterModule.register(routes)];
}
