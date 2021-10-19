import { Module } from '@nestjs/common';
import { ElasticService } from './elastic.service';
import { ElasticController } from './elastic.controller';

@Module({
  providers: [ElasticService],
  controllers: [ElasticController]
})
export class ElasticModule {}
