import { Injectable } from '@angular/core';
import { Group } from 'src/app/interfaces/group';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  private defaultUrl = 'http://localhost:3333';
  private groupsUrl =  `${this.defaultUrl}/groups`;

  constructor(private http: HttpClient ) { }

  getGroups(): Observable<Group[]>{
    return this.http.get<Group[]>(this.groupsUrl).pipe();
  }

  getGroup(iId: number): Observable<Group>{
    return this.http.get<Group>(`${this.groupsUrl}?id=${iId}`).pipe();
  }

  postGroup(iGroup: Group): Observable<Group>{
    return this.http.post<Group>(this.groupsUrl, iGroup).pipe();
  }

  delGroup(iId: number): Observable<Group>{
    return this.http.delete<Group>(`${this.groupsUrl}/${iId}`).pipe();
  }

  updateGroup(iGroup: Group): Observable<Group>{
    return this.http.put<Group>(this.groupsUrl, iGroup).pipe();
  }
}
