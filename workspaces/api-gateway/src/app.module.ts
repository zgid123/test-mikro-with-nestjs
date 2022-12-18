import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { TestsModule } from 'src/tests/tests.module';

@Module({
  imports: [MikroOrmModule.forRoot(), TestsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
