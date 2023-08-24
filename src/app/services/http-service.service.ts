import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
  ) {

   }

  public async get(url: string, params?: any, headers?: any): Promise<any> {
    return await CapacitorHttp.get({
      url: url,
      params: params ? params : [],
      headers: headers ? headers : []
    });
   }
   public async post(url: string, params?: any, headers?: any): Promise<any> {
    return await CapacitorHttp.post({
      url: url,
      params: params ? params : [],
      headers: headers ? headers : []
    });
   }

    public async put(url: string, params?: any, headers?: any): Promise<any> {
    return await CapacitorHttp.put({
      url: url,
      params: params ? params : [],
      headers: headers ? headers : []
    });
  }

    public async delete(url: string, params?: any, headers?: any): Promise<any> {
      return await CapacitorHttp.delete({
        url: url,
      params: params ? params : [],
      headers: headers ? headers : []
      });
    }

}

export const Endpoints = {
  spotifyLogin: 'https://accounts.spotify.com/authorize',
  spotifyToken: 'https://accounts.spotify.com/api/token',
  signin: 'http://127.0.0.1:5000/auth/login',
  register: 'http://127.0.0.1:5000/auth/register',
  signout: 'http://127.0.0.1:5000/auth/logout'
}