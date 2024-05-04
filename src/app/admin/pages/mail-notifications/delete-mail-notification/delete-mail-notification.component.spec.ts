import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMailNotificationComponent } from './delete-mail-notification.component';

describe('DeleteMailNotificationComponent', () => {
  let component: DeleteMailNotificationComponent;
  let fixture: ComponentFixture<DeleteMailNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteMailNotificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteMailNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
