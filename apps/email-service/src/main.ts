import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://srvrxfpp:ixIy_7OlJol72MzHkCBuYv2O-3C-slPl@mustang.rmq.cloudamqp.com/srvrxfpp'],
      queue: 'notifications.email',
      queueOptions: { durable: true },
    },
  });

  await app.listen();
  console.log('Email Service is running');
}

bootstrap();
