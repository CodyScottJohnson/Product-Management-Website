import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclesNewComponent } from './circles-new.component';

describe('CirclesNewComponent', () => {
  let component: CirclesNewComponent;
  let fixture: ComponentFixture<CirclesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
