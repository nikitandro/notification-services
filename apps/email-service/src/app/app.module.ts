import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { MicroservicesModule } from '@nestjs/microservices/microservices-module';
import { EmailNotificationsController } from './app.controller';

@Module({
  imports: [MicroservicesModule],
  controllers: [EmailNotificationsController],
  providers: [AppService],
})
export class AppModule {}
