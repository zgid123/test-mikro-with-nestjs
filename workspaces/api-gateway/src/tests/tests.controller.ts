import { EntityManager } from '@mikro-orm/postgresql';
import { Controller, Get } from '@nestjs/common';

@Controller('tests')
export class TestsController {
  constructor(private readonly em: EntityManager) {}

  @Get()
  getHello(): string {
    return '';
  }
}
