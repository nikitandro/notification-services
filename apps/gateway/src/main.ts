import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Подключение к RabbitMQ
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://srvrxfpp:ixIy_7OlJol72MzHkCBuYv2O-3C-slPl@mustang.rmq.cloudamqp.com/srvrxfpp'],
      queue: 'notifications.results',
      queueOptions: { durable: true },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
  console.log('Notification Gateway is running on port 3000');
}

bootstrap();
