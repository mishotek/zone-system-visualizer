import { Component, OnInit } from '@angular/core';
import {SHUTTER_SPEEDS} from "../../constants/shutter-speeds";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MeasurementsService} from "../../services/measurements.service";

@Component({
  selector: 'app-measurement-form',
  templateUrl: './measurement-form.component.html',
  styleUrls: ['./measurement-form.component.scss']
})
export class MeasurementFormComponent implements OnInit {

  public readonly SHUTTER_SPEEDS = SHUTTER_SPEEDS;

  public readonly measurementFormGroup: FormGroup;

  constructor(private measurementsService: MeasurementsService) {
    this.measurementFormGroup = new FormGroup({
      shutterSpeed: new FormControl(null, Validators.required),
      name: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void { }

  public onSubmit(): void {
    this.measurementsService.addMeasurement(this.measurementFormGroup.getRawValue());

    this.measurementFormGroup.reset({
      shutterSpeed: null,
      name: ''
    });
  }

}
