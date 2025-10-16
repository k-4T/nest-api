import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(":id/:name")
  get_users(
    @Param("id") id: string,
    @Param("name") name: string,
  ) {
    return this.userService.get_users(id, name);
  }
}
