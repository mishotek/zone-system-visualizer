import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbSelectModule, NbListModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { ZoneSystemVisualizerComponent } from "./containers/zone-system-visualizer/zone-system-visualizer.component";
import {HeaderComponent} from "./components/header/header.component";
import {MeasurementFormComponent} from "./components/measurement-form/measurement-form.component";
import {MeasurementListComponent} from "./components/measurement-list/measurement-list.component";
import {ShutterSpeedDialComponent} from "./components/shutter-speed-dial/shutter-speed-dial.component";
import {ZonesComponent} from "./components/zones/zones.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ZoneSystemVisualizerComponent,
    HeaderComponent,
    MeasurementFormComponent,
    MeasurementListComponent,
    ShutterSpeedDialComponent,
    ZonesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbSelectModule,
    NbListModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
