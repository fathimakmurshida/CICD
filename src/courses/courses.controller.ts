import { Controller, Get } from '@nestjs/common';

@Controller()
export class CoursesController {
  @Get('/api/hello-worldd')
  async helloWorld(): Promise<String> {
    return 'Hello Worldd';
  }
}
