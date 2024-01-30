import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutinfoComponent } from './produtinfo.component';

describe('ProdutinfoComponent', () => {
  let component: ProdutinfoComponent;
  let fixture: ComponentFixture<ProdutinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
