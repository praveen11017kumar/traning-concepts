import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JscriptsListComponent } from './jscripts-list.component';

describe('JscriptsListComponent', () => {
  let component: JscriptsListComponent;
  let fixture: ComponentFixture<JscriptsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JscriptsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JscriptsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
