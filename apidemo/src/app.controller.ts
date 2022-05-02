import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('hello')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('world')
  getHello(){
    return this.appService.getUser();
  }
}
