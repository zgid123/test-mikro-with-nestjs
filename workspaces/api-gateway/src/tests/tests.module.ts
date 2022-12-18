import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { Test } from 'src/db/models/Test';
import { TestsController } from 'src/tests/tests.controller';

@Module({
  imports: [MikroOrmModule.forFeature([Test])],
  controllers: [TestsController],
  providers: [],
})
export class TestsModule {}
