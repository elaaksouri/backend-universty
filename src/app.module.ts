import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module'from "@nestjs/config";
imports {ConfigModule } from "@"

@Module({
  imports: [ConfigModule.forRoot(),StudentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
