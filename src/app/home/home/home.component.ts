import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ResponseGeneric } from 'src/app/interfaces/ResponseGeneric';
import { CalzadoService } from '../../services/calzado.service';
import { ModeloCalzado } from '../../interfaces/ModeloCalzado';
import { AngularFireStorage } from '@angular/fire/storage'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  array = [1, 2, 3, 4];
  modeloCalzado: Array<ModeloCalzado>;
  arrModelos: Array<any>;

  precioDollar = 23;

  constructor(private calzadoService: CalzadoService, private angularFS : AngularFireStorage ) { }

  async ngOnInit(): Promise<void> {

      await this.calzadoService.getModelos().pipe(take(1))
      .subscribe( (modelos: Array<ModeloCalzado> ) => {

        this.modeloCalzado = modelos
        modelos.filter( async modelo =>{
          await this.angularFS.ref("pruebas/" + modelo.nombre).getDownloadURL()
          .pipe(take(1))
          .subscribe( async (url: string)=>{
                modelo.precioSugerido = ((modelo.precioSugerido * this.precioDollar) - (modelo.precioSugerido * this.precioDollar) * 0.15)
                modelo.imageFull = url;
          });
        })
      })
    }
}
