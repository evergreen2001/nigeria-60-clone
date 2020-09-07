import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteAreaComponent } from './vote-area.component';

describe('VoteAreaComponent', () => {
  let component: VoteAreaComponent;
  let fixture: ComponentFixture<VoteAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
