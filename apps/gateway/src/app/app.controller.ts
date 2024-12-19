import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { Observable, tap } from 'rxjs';
import { SendNotificationDto } from './application';

@Controller()
export class AppController {
  private emailClient: ClientProxy;

  constructor(private readonly appService: AppService) {
    this.emailClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://srvrxfpp:ixIy_7OlJol72MzHkCBuYv2O-3C-slPl@mustang.rmq.cloudamqp.com/srvrxfpp'],
        queue: 'notifications.email',
        queueOptions: { durable: true },
      }
    });
  }

  @Get()
  public getData() {
    return this.appService.getData();
  }

  @Post('email')
  public sendEmail(@Body() payload: SendNotificationDto): Observable<unknown> {
    return this.emailClient.send('email', payload);
  }
}
