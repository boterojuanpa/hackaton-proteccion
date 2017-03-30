import { Usuario } from './usuario.model';
import { Sede } from './sede.model';
import { TipoTramite } from './tipo-tramite.model';

export class Tramite {
    public tipoTramite: TipoTramite;
    public sede: Sede;
    public celular: number;
    public fecha: Date;
    public usuario: Usuario;

    constructor() {
        
     }
}