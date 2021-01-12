import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpaceX } from '../models/spacex.moel';

const apiEndPoint = 'https://api.spacexdata.com/v3/launches'

@Injectable({
  providedIn: 'root'
})
export class FetchDetailsService {

  constructor(private http: HttpClient) { }

  fetchData(params: HttpParams):Observable<ISpaceX[]>{
    params = params.append('limit', '100');
    
    return this.http.get<ISpaceX[]>(`${apiEndPoint}`,{params})
  }

  firstTimeFetchData(params: HttpParams):Observable<ISpaceX[]>{
    return this.http.get<ISpaceX[]>(`${apiEndPoint}`,{params})
  }
}
