import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Test } from '../db/models/Test';
import { TestsController } from '../tests/tests.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Test])],
  controllers: [TestsController],
  providers: [],
})
export class TestsModule {}
