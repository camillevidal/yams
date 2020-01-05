import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YamsGameComponent } from './yams-game.component';

describe('YamsGameComponent', () => {
  let component: YamsGameComponent;
  let fixture: ComponentFixture<YamsGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YamsGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YamsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
