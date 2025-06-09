import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


//Encargado de la lógica
@Controller(`proveedores`) //trabaja sobre la ruta base.
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('nuevos')
  getTracks(): string[]{
    return this.appService.getTracks();
  }
}
