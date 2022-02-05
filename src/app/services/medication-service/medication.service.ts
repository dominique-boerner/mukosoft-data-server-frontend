import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {lastValueFrom} from "rxjs";
import {Medication} from "fhir/r4";
import {SwissMedication} from "../../models/SwissMedication";
import {Message} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class MedicationService {

  constructor(private readonly httpClient: HttpClient) {
  }


  async countMedications(): Promise<number> {
    const request = this.httpClient.get<number>(`${environment.api.baseUrl}/${environment.api.medication.endpoint}/${environment.api.medication.count}`).pipe();
    return await lastValueFrom(request);
  }

  async getAllMedications(): Promise<SwissMedication[]> {
    const request = this.httpClient.get<SwissMedication[]>(`${environment.api.baseUrl}/${environment.api.medication.endpoint}/${environment.api.medication.getAllMedications}`).pipe();
    return await lastValueFrom(request);
  }
}
