import { Component, OnInit } from '@angular/core';
import {Allergie} from '../model/allergie';
import {AllergieService} from '../services/allergie.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-allergie-update',
  templateUrl: './allergie-update.component.html',
  styleUrls: ['./allergie-update.component.css']
})
export class AllergieUpdateComponent implements OnInit {

  form: FormGroup;
  allergie: Allergie;
  idAllergie: any ;
  oldrAllergiel: any ;

  constructor(private builder: FormBuilder, private service: AllergieService, protected activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      idAllergie: new FormControl(),
      libelleAllergie: new FormControl()
    });

    this.idAllergie = this.activatedRoute.snapshot.paramMap.get('idAllergie');

    this.service.findOne(this.idAllergie).subscribe(
      (res) => {
        this.oldrAllergiel = res.libelleAllergie;
        this.idAllergie = res.idAllergie;
      }
    );
  }

  submit() {
    this.allergie = this.form.value;
    this.allergie.idAllergie = this.idAllergie ;
    this.service.save(this.allergie).subscribe(
      (res) => console.log(res)
    );
    window.history.back();
  }

  previousState() {
    window.history.back();
  }

}
