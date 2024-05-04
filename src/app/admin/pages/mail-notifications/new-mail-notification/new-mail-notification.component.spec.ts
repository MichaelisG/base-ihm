import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMailNotificationComponent } from './new-mail-notification.component';

describe('NewMailNotificationComponent', () => {
  let component: NewMailNotificationComponent;
  let fixture: ComponentFixture<NewMailNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewMailNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewMailNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
