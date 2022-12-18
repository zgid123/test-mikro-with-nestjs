import { EntityManager } from '@mikro-orm/postgresql';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly em: EntityManager,
  ) {}

  @Get()
  getHello(): string {
    console.log(this.em);
    return this.appService.getHello();
  }
}
