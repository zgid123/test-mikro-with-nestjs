import type { Type } from '@nestjs/common';
import type { RouteTree } from '@nestjs/core';

interface ICreateRouteParams {
  module: Type;
  path: string;
}

export function createRoute({ path, module }: ICreateRouteParams): RouteTree {
  return {
    path,
    module,
  };
}
