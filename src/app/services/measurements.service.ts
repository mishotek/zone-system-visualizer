import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, pairwise} from "rxjs";
import {Measurement} from "../components/models/measurement.model";
import {APERTURES} from "../constants/apertures";
import {SHUTTER_SPEEDS} from "../constants/shutter-speeds";

@Injectable({
  providedIn: 'root'
})
export class MeasurementsService {

  private readonly DEFAULT_APERTURE = '8';

  private measurements$: BehaviorSubject<Array<Measurement>> = new BehaviorSubject<Array<Measurement>>([]);
  private aperture$: BehaviorSubject<string> = new BehaviorSubject<string>(this.DEFAULT_APERTURE);

  constructor() {
    this.updateMeasurementsOnApertureChange();
  }

  public addMeasurement(measurement: Measurement): void {
    const measurements = this.measurements$.getValue();
    this.measurements$.next([...measurements, measurement]);
  }

  public setAperture(aperture: string): void {
    this.aperture$.next(aperture);
  }

  public getMeasurements$(): Observable<Array<Measurement>> {
    return this.measurements$.asObservable();
  }

  public getAperture$(): Observable<string> {
    return this.aperture$.asObservable();
  }

  private updateMeasurementsOnApertureChange(): void {
    this.aperture$
      .pipe(pairwise())
      .subscribe(([aperture, newAperture]) => {
        const measurementsForNewAperture = this.getUpdatedMeasurements(this.measurements$.getValue(), aperture, newAperture);
        this.measurements$.next(measurementsForNewAperture);
      });
  }

  private getUpdatedMeasurements(measurements: Array<Measurement>, aperture: string, newAperture: string): Array<Measurement> {
    const oldApertureIndex = APERTURES.indexOf(aperture);
    const newApertureIndex = APERTURES.indexOf(newAperture);

    if (oldApertureIndex === -1) {
      throw Error(`Invalid aperture ƒ ${aperture}`);
    }

    if (newApertureIndex === -1) {
      throw Error(`Invalid aperture ƒ ${newApertureIndex}`);
    }

    const stops = newApertureIndex - oldApertureIndex;

    return measurements
      .map(measurement => this.moveMeasurementByFStops(measurement, stops));
  }

  private moveMeasurementByFStops(measurement: Measurement, stops: number): Measurement {
    const currIndex = SHUTTER_SPEEDS.indexOf(measurement.shutterSpeed);

    if (currIndex === -1) {
      throw Error(`Invalid shutter speed of ${measurement.shutterSpeed}`);
    }

    const newIndex = currIndex + stops;
    const safeIndex = Math.min(SHUTTER_SPEEDS.length - 1, Math.max(0, newIndex));

    return { ...measurement, shutterSpeed: SHUTTER_SPEEDS[safeIndex] };
  }
}
