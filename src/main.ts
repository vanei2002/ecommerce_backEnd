import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  
  app.use(cors());

  await app.listen(process.env.NEST_PORT|| 3000);


}
bootstrap();
