import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PetDto} from "../admin-pets/shared/pet.dto";

@Component({
  selector: 'app-pets-overwiew',
  templateUrl: './pets-overwiew.component.html',
  styleUrls: ['./pets-overwiew.component.scss']
})
export class PetsOverwiewComponent implements OnInit {
  pets: PetDto[] | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<PetDto[]>('https://localhost:5001/Pet/1').subscribe(pets => {this.pets = pets})
  }

}
