import { Component, OnInit } from '@angular/core';
import {map, Observable} from "rxjs";
import {Measurement} from "../models/measurement.model";
import {MeasurementsService} from "../../services/measurements.service";
import {APERTURES} from "../../constants/apertures";

@Component({
  selector: 'app-measurement-list',
  templateUrl: './measurement-list.component.html',
  styleUrls: ['./measurement-list.component.scss']
})
export class MeasurementListComponent implements OnInit {

  public readonly APERTURES = APERTURES;

  public readonly measurements$: Observable<Array<Measurement>>;
  public readonly noMeasurements$: Observable<boolean>;
  public readonly aperture$: Observable<string>;

  constructor(private measurementsService: MeasurementsService) {
    this.measurements$ = this.measurementsService
      .getMeasurements$();
    this.noMeasurements$ = this.measurements$
      .pipe(map(measurements => measurements.length === 0));
    this.aperture$ = this.measurementsService.getAperture$();
  }

  ngOnInit(): void { }

  public onApertureChange(newAperture: string): void {
    this.measurementsService.setAperture(newAperture);
  }
}
