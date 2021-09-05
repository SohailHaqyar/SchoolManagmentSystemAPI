import { Controller, Get } from '@nestjs/common';

@Controller('student')
export class StudentController {
  constructor() {}
  @Get()
  hello() {
    return 'Hello Student';
  }
}
