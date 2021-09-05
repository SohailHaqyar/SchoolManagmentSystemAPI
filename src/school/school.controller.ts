import { Controller, Get } from '@nestjs/common';

@Controller('school')
export class SchoolController {
  constructor() {}
  @Get()
  hello() {
    return 'Hello School!';
  }
}
