import {Component, OnInit} from '@angular/core';
import {MedicationService} from "../../services/medication-service/medication.service";
import {Medication} from "fhir/r4";

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  medications: Medication[] = [];
  filteredMedications: Medication[] = [];
  first = 0;
  rows = 10;

  constructor(private readonly medicationService: MedicationService) {
  }

  ngOnInit(): void {
    this.loadMedications();
  }

  loadMedications() {
    this.medicationService.getAllMedications().then(response => {

      console.log(response)
      response.data.forEach(medication => {
        const m: Medication = {
          resourceType: "Medication",
          identifier: [
            {value: medication.PRODNO, use: "secondary"},
            {value: medication.DSCRD, use: "usual"},
            {value: medication.ATC, use: "official"}
          ],
          form: {text: medication.EinheitSwissmedic}
        };
        this.medications = [...this.medications, m];
        this.filteredMedications = [...this.medications, m];
      })
    });
  }

  filterBy(value: string) {
    this.first = 0;
    this.filteredMedications = this.medications.filter(medication => {
      if (medication.identifier && medication.identifier.length > 0) {
        return medication?.identifier[1]?.value?.toLowerCase().includes(value.toLowerCase())
      } else {
        return [];
      }
    });
  }

  /**
   * Converts a medication to a "gelbe liste" url. This works, because the "gelbe liste" url is build with
   * the name of the medication followed by an underscore and the atc.
   *
   * @see e.g. https://www.gelbe-liste.de/atc/Ramipril_C09AA05
   *
   * @param medication
   */
  getGelbeListeUrl(medication: Medication) {
    let atc: string | undefined = undefined;
    let name: string | undefined = undefined;
    let url: string = "";

    if (medication.identifier) {
      atc = medication.identifier[2].value;
      name = medication.identifier[1].value?.split(" ")[0];
    }

    if (atc && name) {
      url += `https://www.gelbe-liste.de/atc/${name}_${atc}`;
    }

    return url;
  }
}
