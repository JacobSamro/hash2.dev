import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {

  constructor(private httpClient: HttpClient) {

  }

  getJSONFileAsString(): Promise<String> {


    return new Promise((resolve, reject) => {

      this.httpClient.get("/assets/tools.json", { responseType: 'json' }).subscribe((res: any) => {

        resolve(res)

      }, (err: any) => {
        reject(err)
      })

    })

  }

}