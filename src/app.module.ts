import { CoursesModule } from './courses/courses.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CoursesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
