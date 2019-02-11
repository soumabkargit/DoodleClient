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
  idAllergiel: any ;
  oldrAllergiel: any ;

  constructor(private builder: FormBuilder, private service: AllergieService, protected activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.idAllergiel = this.activatedRoute.snapshot.paramMap.get('idAllergie');

    this.service.findOne(this.idAllergiel).subscribe(
      (res) => this.oldrAllergiel = res.libelleAllergie
    );

    this.form = new FormGroup({
      idAllergie: new FormControl(),
      libelleAllergie: new FormControl()
    });


  }

  submit() {
    const allergie: Allergie = this.form.value;
    this.service.save(allergie).subscribe(
      (res) => console.log(res)
    );
  }

  previousState() {
    window.history.back();
  }

}
