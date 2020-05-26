import { Phone } from './phone';

export interface Clients {
    name: string;
    id_type: string;
    type: string;
    cpf: string;
    rg: string;
    date: string;
    id_group: number;
    group: string;
    status: string;
    id_status: string;
    tel: Phone[];
}
