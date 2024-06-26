import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailNotificationsComponent } from './mail-notifications.component';

describe('MailNotificationsComponent', () => {
  let component: MailNotificationsComponent;
  let fixture: ComponentFixture<MailNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailNotificationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MailNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
