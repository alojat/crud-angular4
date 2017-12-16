import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoencontradoComponent } from './noencontrado.component';

describe('NoencontradoComponent', () => {
  let component: NoencontradoComponent;
  let fixture: ComponentFixture<NoencontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoencontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoencontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
