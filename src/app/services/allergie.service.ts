import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Allergie } from '../model/allergie';

@Injectable({
  providedIn: 'root'
})
export class AllergieService {
  private allergieUrl: string;
  constructor(private http: HttpClient) {
    this.allergieUrl = 'http://localhost:8080/doodle/allergie';
  }

  public findAll(): Observable<Allergie[]> {
    return this.http.get<Allergie[]>(this.allergieUrl);
  }

  public save(allergie: Allergie) {
    return this.http.post<Allergie>(this.allergieUrl, allergie);
  }

  public update(id: number, changes: any) {
    return this.http.put<Allergie>(this.allergieUrl + '/' + id, changes);
  }

  public delete(id: number) {
    return this.http.delete<Allergie>(this.allergieUrl + '/' + id);
  }
}
