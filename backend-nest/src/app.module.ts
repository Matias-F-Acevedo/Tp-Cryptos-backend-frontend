import { Module } from '@nestjs/common';
// import { CryptosController } from './app.controller';
// import { AppService } from './app.service';
import { CryptoController } from './crypto/crypto.controller';
import { CryptoService } from './crypto/crypto.service';

@Module({
  imports: [],
  controllers: [CryptoController],
  providers: [CryptoService],
})
export class AppModule {}
