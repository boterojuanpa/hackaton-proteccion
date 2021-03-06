import { Usuario } from './usuario.model';
import { Sede } from './sede.model';
import { TipoTramite } from './tipo-tramite.model';

export class Tramite {
    public tipoTramite: TipoTramite;
    public sede: Sede;
    public celular: number;
    public fecha: Date;
    public usuario: Usuario;
    public fechaTurno : number;
    public numeroTurno : string;
    public subscription : string;
    public email : string;

    constructor() {
        this.email = "juan.botero@ceiba.com.co";
        this.celular = 3016861422;
        
     }
}