import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { creercomptecomponent } from './creercompte.component';

describe('CreercomptsComponent', () => {
  let component: creercomptecomponent;
  let fixture: ComponentFixture<creercomptecomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ creercomptecomponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(creercomptecomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
