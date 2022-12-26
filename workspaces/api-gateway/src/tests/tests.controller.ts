import { Controller, Get } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/postgresql';

@Controller('tests')
export class TestsController {
  constructor(private readonly em: EntityManager) {}

  @Get()
  getHello(): string {
    return '';
  }
}
