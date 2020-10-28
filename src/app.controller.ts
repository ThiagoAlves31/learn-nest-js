import { Controller, Get, HttpService, Param, ParseArrayPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService,private readonly httpService: HttpService,
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cep/:id')
    async getProject(@Param('id') id: string){
      console.log('https://viacep.com.br/ws/'+id+'/json/')
      
        let resp = await this.httpService.get('https://viacep.com.br/ws/'+id+'/json/')
        .toPromise()
        .then(res => res.data)
        return resp.erro ? {"Erro":"Erro encontrado"} : resp
      }
}