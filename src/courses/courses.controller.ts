import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoursesController {
  @Get('/api/hello-world')
  async helloWorld(): Promise<String> {
    return 'Hello World';
  }
}
