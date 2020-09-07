import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeAreaComponent } from './challenge-area.component';

describe('ChallengeAreaComponent', () => {
  let component: ChallengeAreaComponent;
  let fixture: ComponentFixture<ChallengeAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
