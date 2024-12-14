import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCopyClipboardComponent } from './ngx-copy-clipboard.component';

describe('NgxCopyClipboardComponent', () => {
  let component: NgxCopyClipboardComponent;
  let fixture: ComponentFixture<NgxCopyClipboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxCopyClipboardComponent]
    });
    fixture = TestBed.createComponent(NgxCopyClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
