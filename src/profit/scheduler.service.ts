import { Injectable } from '@nestjs/common';
import { ProfitService } from './profit.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
    constructor(private readonly profitService: ProfitService) {}

    // @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    // @Cron('*/5 * * * * *')
    // handleDailyJob() {
    //     this.profitService.calculateProfit(2000, 800);
    //     const revenue = Math.floor(Math.random() * 5000) + 500; // 500 - 5500
    //     const cost = Math.floor(Math.random() * revenue);       // 0 - revenue

    //     this.profitService.calculateProfit(revenue, cost);

    //     console.log('⏰ Cron Job Running →', this.profitService.getLastProfit());
    // }

    startProfit() {
        console.log("111111111111111111")
    }
}
