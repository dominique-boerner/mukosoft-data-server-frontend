import { Component, OnInit } from '@angular/core';
import {MedicationService} from "../../services/medication-service/medication.service";
import {MessageService} from "primeng/api";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading = true;
  medicationCount = 0;
  customMappingCount = 0;

  constructor(private readonly medicationService: MedicationService,
              private readonly messageService: MessageService) { }

  ngOnInit(): void {
    this.medicationService.countMedications()
      .then(response => this.medicationCount = response.data.length+1)
      .then(() => this.isLoading = false)
      .catch((err: HttpErrorResponse) => {
        this.messageService.add({
          severity: "error",
          summary: "Fehler beim laden der Medikamente",
          detail: `${err.statusText}: Status Code ${err.status}`
        });
        this.isLoading = false;
      });
  }
}
