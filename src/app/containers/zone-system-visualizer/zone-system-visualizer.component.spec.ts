import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneSystemVisualizerComponent } from './zone-system-visualizer.component';

describe('ZoneSystemVisualizerComponent', () => {
  let component: ZoneSystemVisualizerComponent;
  let fixture: ComponentFixture<ZoneSystemVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneSystemVisualizerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneSystemVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
