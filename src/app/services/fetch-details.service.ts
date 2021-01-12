import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiEndPoint = 'https://api.spacexdata.com/v3/launches'

@Injectable({
  providedIn: 'root'
})
export class FetchDetailsService {

  constructor(private http: HttpClient) { }

  fetchData(params: HttpParams):Observable<any>{
    params = params.append('limit', '100');
    
    return this.http.get(`${apiEndPoint}`,{params})
  }

  firstTimeFetchData(params: HttpParams):Observable<any>{
    return this.http.get(`${apiEndPoint}`,{params})
  }
}
