import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useStaticAssets(path.resolve("./public"));
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:4200',
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  };

  app.enableCors(corsOptions);


  await app.listen(4000);
}
bootstrap();
