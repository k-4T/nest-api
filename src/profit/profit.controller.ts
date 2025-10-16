import { SchedulerRegistry } from '@nestjs/schedule';
import { SchedulerService } from './scheduler.service';


import { Controller, Get, Post } from '@nestjs/common';
import { ProfitService } from './profit.service';
import { CronJob } from 'cron';



@Controller('profit')
export class ProfitController {
    constructor(
		private readonly profitService: ProfitService,
        private readonly schedulerService: SchedulerService,
        private schedulerRegistry: SchedulerRegistry
	) {}

	@Get()
	getProfit() {
		return this.profitService.getLastProfit();
	}

    @Post("start-profit")
    startProfit() {
        const job = new CronJob("*/5 * * * * *", this.schedulerService.startProfit)
        this.schedulerRegistry.addCronJob("job", job);
        job.start();

        return {
            "message": "success"
        }
    }

    @Post("stop-profit")
    stopProfit() {
        const job = this.schedulerRegistry.getCronJob("job");
        job.stop();

        return {
            "message": "stopped"
        }
    }

    @Post("resume-profit")
    resumeProfit() {
        const job = this.schedulerRegistry.getCronJob("job");
        job.start();

        return {
            "message": "resumed"
        }
    }

    @Post("delete-profit")
    deleteProfit() {
        this.schedulerRegistry.deleteCronJob("job");

        return {
            "message": "DELETED"
        }
    }
}
