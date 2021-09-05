import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor() {}
  @Get()
  hello(): string {
    return 'Hello User!';
  }
}
