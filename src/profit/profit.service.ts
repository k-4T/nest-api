import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class ProfitService {
    private lastProfit: any = null; // store last profit result
    
    calculateProfit(revenue: number, cost: number) {
        const profit = revenue - cost;
        const margin = revenue === 0 ? 0 : (profit / revenue) * 100;

        const result = {
            revenue,
            cost,
            profit,
            margin: +margin.toFixed(2),
        };

        // save latest profit
        this.lastProfit = result;

        return result;
    }

    getLastProfit() {
        return this.lastProfit || { message: 'No profit calculated yet' };
    }

    // onModuleInit() {
    //     console.log("1111111111111111");
    // }
}
