import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clients } from 'src/app/interfaces/clients';
import { Observable } from 'rxjs';
import { Phone } from 'src/app/interfaces/phone';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private defaultUrl = 'http://localhost:3333';
  private clientsUrl = `${this.defaultUrl}/clients`;
  private phonesUrl = `${this.defaultUrl}/phones`;

  constructor(private http: HttpClient) { }

  getClients(): Observable<Clients[]> {
    return this.http.get<Clients[]>(this.clientsUrl).pipe();
  }

  postClient(iClient: Clients): Observable<Clients> {
    return this.http.post<Clients>(this.clientsUrl, iClient).pipe();
  }

  delClient(iCpf: string): Observable<Clients> {
    return this.http.delete<Clients>(`${this.clientsUrl}/${iCpf}`).pipe();
  }

  updateClient(iGroup: Clients): Observable<Clients> {
    return this.http.put<Clients>(this.clientsUrl, iGroup).pipe();
  }

  getPhone(iCpf: string): Observable<Phone[]> {
    return this.http.get<Phone[]>(`${this.phonesUrl}/?cpf=${iCpf}`);
  }
}
