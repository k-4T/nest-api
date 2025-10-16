import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    get_users(id: string, name: string) {
        return `hello i am k ${id} and ${name}`;
    }
}
