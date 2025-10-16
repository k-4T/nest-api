import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

    getProduct(name: string) {
        return name;
    }
}
