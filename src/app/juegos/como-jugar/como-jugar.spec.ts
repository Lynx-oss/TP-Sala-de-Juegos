import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoJugar } from './como-jugar';

describe('ComoJugar', () => {
  let component: ComoJugar;
  let fixture: ComponentFixture<ComoJugar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComoJugar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComoJugar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
