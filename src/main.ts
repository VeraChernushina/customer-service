import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://USERNAME:PASSWORD@localhost:5672/hello'],
      queue: 'customer-messages',
      queueOptions: {
        durable: false,
      },
    },
  });
  await app.startAllMicroservices();
}
bootstrap();
