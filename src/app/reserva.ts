
import { User } from "./user";
import { Partida } from "./partida";
import { Mountains } from "./mountains";

export class Reserva {
    id?:any
    numero:any
    n_personas:any
    users_id?:User
    partidas_id?:Partida
    mountains_id?:Mountains

}
