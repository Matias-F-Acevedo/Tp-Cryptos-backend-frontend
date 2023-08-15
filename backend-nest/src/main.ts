import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // para que nos permita conectarnos con el frontend:
  app.enableCors();
  // con lo siguiente podemos setear el profijo de la api, quedando: "http://localhost:3000/api/crypto" en este caso.
   app.setGlobalPrefix('api')
  await app.listen(3000);
}
bootstrap();
