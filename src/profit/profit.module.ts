import { Module } from '@nestjs/common';
import { ProfitService } from './profit.service';
import { ProfitController } from './profit.controller';
import { SchedulerService } from './scheduler.service';

@Module({
    controllers: [ProfitController],
    providers: [ProfitService, SchedulerService],
})
export class ProfitModule {}
