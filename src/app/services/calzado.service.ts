import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ResponseGeneric } from '../interfaces/ResponseGeneric';
import { ModeloCalzado } from '../interfaces/ModeloCalzado';

const api = environment.contextModelos



export const errores = {
  errorGenerico: 'Ocurrió un error de conexión, inténtalo de nuevo, por favor.',
  intenteMasTarde: 'Ocurrió un problema, intente más tarde.',
  noDisponible: 'No se encuentra disponible.',
  listadoFacturas: 'No se cuenta con documentación asociada.',
  noSeEncontro: 'No se encontraron resultados.',
  rangoValido: 'Ingresa un rango de fechas válido.',
  fechaInicioMayorFechaFin: 'La fecha inicio siniestro no debe ser mayor a la fecha fin siniestro.',
  fechaInicioMayorAhora: 'La fecha inicio siniestro no debe ser mayor a la fecha actual.',
  fechaFinMayorAhora: 'La fecha fin siniestro no debe ser mayor a la fecha actual.',
  errorPoliza: 'Error al obtener el siniestro.',
  sinRFCSiniestrosXPersona:
      'El cliente seleccionado no tiene RFC. No es posible realizar la acción solicitada.',
  sinIdParticipanteSiniestrosXPersona:
      'El cliente seleccionado no tiene ID Participante. No es posible realizar la acción solicitada.'
};


@Injectable({
  providedIn: 'root'
})
export class CalzadoService {

  constructor(private http: HttpClient) { }

  getModelos(): Observable<Array<ModeloCalzado>> {
    return this.http.get(`${api}`)
    .pipe(
      map( ( response: ResponseGeneric) => {
          return response.payload
      })

      ,catchError((error)=> this.catchErrors(error))
    )
  }

  catchErrors(error, requiredValidationResponse: boolean = false) {
    const mensaje = requiredValidationResponse
        ? error
        : error.error && error.error.code
        ? error.error.message
        : errores.errorGenerico;

    return throwError(mensaje);
}
}
