import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { A } from './db/models/A';
import { B } from './db/models/B';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TestsModule } from './tests/tests.module';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature([A, B]),
    TestsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
