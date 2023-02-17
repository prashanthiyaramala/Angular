import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificategenerationComponent } from './certificategeneration.component';

describe('CertificategenerationComponent', () => {
  let component: CertificategenerationComponent;
  let fixture: ComponentFixture<CertificategenerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificategenerationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificategenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
