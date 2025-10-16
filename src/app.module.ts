import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfitModule } from './profit/profit.module';
import { ProductModule } from './product/product.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './prisma/prisma.module';

@Module({
	controllers: [AppController],
	providers: [AppService],
	imports: [
		ScheduleModule.forRoot(),
		UserModule,
		ProfitModule,
		ProductModule,
		PrismaModule
	],
})
export class AppModule {}
