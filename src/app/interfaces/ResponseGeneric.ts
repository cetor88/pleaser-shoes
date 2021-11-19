import { ModeloCalzado } from './ModeloCalzado';

export interface ResponseGeneric {
  payload: Array<ModeloCalzado | any>;
  message: string;
  code: number;
}
