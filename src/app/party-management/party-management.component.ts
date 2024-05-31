import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PartyService } from '../party.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-party-management',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './party-management.component.html',
  styleUrl: './party-management.component.css'
})
export class PartyManagementComponent implements OnInit {
  partyForm: FormGroup;
  parties: any[] = [];
  isEdit = false;
  editPartyId: string | null = null;

  constructor(private fb: FormBuilder, private partyService: PartyService) {
    this.partyForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      date: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.loadParties();
  }

  loadParties(): void {
    this.partyService.getParties().subscribe(data => {
      console.log("Parties:", data); // Log the data received from the API

      this.parties = data;
    });
  }

  onSubmit(): void {
    if (this.partyForm.valid) {
      if (this.isEdit && this.editPartyId !== null) {
        this.partyService.updateParty(this.editPartyId, this.partyForm.value).subscribe(() => {
          this.loadParties();
          this.isEdit = false;
          this.editPartyId = null;
          this.partyForm.reset();
        });
      } else {
        this.partyService.addParty(this.partyForm.value).subscribe(() => {
          this.loadParties();
          this.partyForm.reset();
        });
      }
    }
  }

  editParty(party: any): void {
    this.isEdit = true;
    this.editPartyId = party.id;
    this.partyForm.patchValue(party);
  }

  deleteParty(id: string): void {
    this.partyService.deleteParty(id).subscribe(() => {
      this.loadParties();
    });
  }
  }
