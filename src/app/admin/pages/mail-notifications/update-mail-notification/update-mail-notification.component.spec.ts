import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMailNotificationComponent } from './update-mail-notification.component';

describe('UpdateMailNotificationComponent', () => {
  let component: UpdateMailNotificationComponent;
  let fixture: ComponentFixture<UpdateMailNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMailNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateMailNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
