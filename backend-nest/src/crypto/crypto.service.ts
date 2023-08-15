import { Injectable } from '@nestjs/common';
import { Crypto } from './crypto.interface';
const URL = "http://localhost:3030/crypto/"


@Injectable()
export class CryptoService {
    async getCryptos(): Promise<Crypto[]> {
        const res = await fetch(URL);
        const parsed = await res.json();
        return parsed;
    }

    async getCryptoById(id:number): Promise<Crypto> {
        const res = await fetch(URL+id);
        const parsed = await res.json();
        return parsed;
    }

}
