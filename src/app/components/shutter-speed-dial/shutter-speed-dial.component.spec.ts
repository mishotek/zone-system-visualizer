import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShutterSpeedDialComponent } from './shutter-speed-dial.component';

describe('ShutterSpeedDialComponent', () => {
  let component: ShutterSpeedDialComponent;
  let fixture: ComponentFixture<ShutterSpeedDialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShutterSpeedDialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShutterSpeedDialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
