import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {lastValueFrom} from "rxjs";
import {SwissMedication} from "../../models/swiss-medication";
import {Response} from "../../models/response";

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(private readonly httpClient: HttpClient) {
  }


  async countMedications(): Promise<Response<SwissMedication[]>> {
    const request = this.httpClient.get<Response<SwissMedication[]>>(`${environment.api.baseUrl}:${environment.api.port}/api/${environment.apiVersion}/${environment.api.v1.medication.endpoint}/${environment.api.v1.medication.getAllMedications}`).pipe();
    return await lastValueFrom(request);
  }

  async getAllMedications(): Promise<Response<SwissMedication[]>> {
    const request = this.httpClient.get<Response<SwissMedication[]>>(`${environment.api.baseUrl}:${environment.api.port}/api/${environment.apiVersion}/${environment.api.v1.medication.endpoint}/${environment.api.v1.medication.getAllMedications}`).pipe();
    return await lastValueFrom(request);
  }
}
