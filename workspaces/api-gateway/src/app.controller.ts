import { EntityRepository, ref, wrap } from '@libs/mikro';
import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';

import { A } from './db/models/A';
import { B } from './db/models/B';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @InjectRepository(A)
    private readonly aRepository: EntityRepository<A>,
    @InjectRepository(B)
    private readonly bRepository: EntityRepository<B>,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  async test(): Promise<A> {
    let a: A = await this.aRepository.findOne(
      {
        id: 1,
      },
      {
        populate: ['b'],
      },
    );

    if (!a) {
      a = this.aRepository.create({
        title: 'test A',
        b: {
          title: 'test B',
        },
      });

      await this.aRepository.getEntityManager().flush();
    } else {
      const b = this.bRepository.create({
        title: 'test aaa',
      });

      wrap(a).assign({
        b,
      });

      wrap(a).assign({
        title: `test a ${new Date().getTime()}`,
      });

      await this.aRepository.getEntityManager().flush();
    }

    return a;
  }
}
