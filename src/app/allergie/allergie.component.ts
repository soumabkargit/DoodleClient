import { Component, OnInit } from '@angular/core';
import {Allergie} from '../model/allergie';
import { AllergieService } from '../services/allergie.service';

@Component({
  selector: 'app-allergie',
  templateUrl: './allergie.component.html',
  styleUrls: ['./allergie.component.css']
})
export class AllergieComponent implements OnInit {

  allergies: Allergie[];
  allergie: Allergie;

  constructor(private allergieService: AllergieService) { }

  ngOnInit() {
    this.allergieService.findAll()
      .subscribe(
        (allergies: Allergie[]) => this.allergies = allergies
      );
  }

  save(allergie: Allergie) {
    this.allergieService.save(allergie).subscribe(
      (res) => this.allergies.push(res)
    );
  }

  update(allergie: Allergie) {
    this.allergieService.update(allergie).subscribe(
      (res) => {
       // const index = this.allergies.findIndex(allergie => allergie.idAllergie === id);
       // this.allergies[index] = res;
      }
    );
  }

  findOne(id: number) {
    this.allergieService.findOne(id).subscribe(
      (res) => {
        const index = this.allergies.findIndex(allergie => allergie.idAllergie === id);
        this.allergies[index] = res;
      }
    );
  }

  delete(id: number) {
    this.allergieService.delete(id)
      .subscribe(
        () => {
          this.allergies = this.allergies.filter(allergie => allergie.idAllergie !== id);
        }
      );
  }

  destroy(id: number) {
    this.allergieService.delete(id).subscribe();
  }
}
