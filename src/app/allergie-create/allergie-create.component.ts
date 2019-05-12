import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AllergieService} from '../services/allergie.service';
import {Allergie} from '../model/allergie';

@Component({
  selector: 'app-allergie-create',
  templateUrl: './allergie-create.component.html',
  styleUrls: ['./allergie-create.component.css']
})
export class AllergieCreateComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder, private service: AllergieService) {}

  ngOnInit() {
    this.form = this.builder.group({
      libelleAllergie: ['', Validators.required]
    });
  }

  submit() {
    const allergie: Allergie = this.form.value;
    this.service.save(allergie).subscribe(
      (res) => console.log(res)
    );
    window.history.back();
  }
}
