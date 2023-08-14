import { Injectable } from '@angular/core';
import { CapacitorHttpPlugin } from '@capacitor/core/types/core-plugins';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http: CapacitorHttpPlugin
  ) {
   }

  public async get(url: string, params?: any, headers?: any): Promise<any> {
    return await this.http.get({
      url,
      params,
      headers
    });
   }
   
   public async post(url: string, data?: any, headers?: any): Promise<any> {
    return await this.http.post({
      url,
      data,
      headers
    });
   }

    public async put(url: string, data?: any, headers?: any): Promise<any> {
      return await this.http.put({
        url,
        data,
        headers
      });
    }

    public async delete(url: string, data?: any, headers?: any): Promise<any> {
      return await this.http.delete({
        url,
        data,
        headers
      });
    }

}
