import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {AllergieService} from '../services/allergie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-allergie-detail',
  templateUrl: './allergie-detail.component.html',
  styleUrls: ['./allergie-detail.component.css']
})
export class AllergieDetailComponent implements OnInit {

  idAllergiel: any ;
  IDallergie: any ;
  LIBallergie: any ;

  constructor(private service: AllergieService, protected activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.idAllergiel = this.activatedRoute.snapshot.paramMap.get('idAllergie');


    this.service.findOne(this.idAllergiel).subscribe(
      (res) => {
        this.IDallergie = res.idAllergie;
        this.LIBallergie = res.libelleAllergie;
      }
    );
  }

  previousState() {
    window.history.back();
  }
}
