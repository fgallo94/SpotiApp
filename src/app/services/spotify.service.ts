import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string;

  constructor(private http : HttpClient) { }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQByCQW-u84w2Xk0arfC_OX4OfZqtUhNgb7rjKCYRow9VCWtR9xmpxKLO0eze--PQ0Q0FO1usSgbRg6D5Gg_MIx29NCZ2xyyB1bs9GrgF2YNrfZonHxVUjmzWM0iWLBFbbnvnVam0614'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
