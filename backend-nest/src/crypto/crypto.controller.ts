import { Controller, Get, Param } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { Crypto } from './crypto.interface';

@Controller('crypto')
export class CryptoController {
    constructor(private readonly cryptoService: CryptoService) {}
        @Get()
        getCryptos():Promise<Crypto[]> {
            return this.cryptoService.getCryptos();
        }

        // Param: lee parametros de rutas y nos permite manejarlos. es un decorador, que dice "voy a recibir un parametro que se llama "id" ":

        @Get("/:id")
        getCryptoById(@Param("id") id:number):Promise<Crypto>{
            return this.cryptoService.getCryptoById(id);

        }
    
}
